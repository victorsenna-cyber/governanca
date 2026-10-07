from __future__ import annotations

import json
import subprocess
import sys
from datetime import datetime
from pathlib import Path

from faster_whisper import WhisperModel


SOURCE_DIR = Path(sys.argv[1]).resolve()
OUTPUT_DIR = Path(sys.argv[2]).resolve()
MODEL_DIR = Path(
    r"C:\Ferramentas\asr-modelos\models--mobiuslabsgmbh--faster-whisper-large-v3-turbo\snapshots\0a363e9161cbc7ed1431c9597a8ceaf0c4f78fcf"
)
PROMPT = (
    "Conversa de WhatsApp em português brasileiro entre Guilherme Araújo e Victor. "
    "Possíveis termos: terapeutas, terapia sistêmica, constelação, grupo de estudos, "
    "permissão sistêmica, anúncio, Instagram, criativos, campanha, tráfego pago, Direct."
)


def duration_seconds(path: Path) -> float:
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True,
        check=True,
        text=True,
        encoding="utf-8",
    )
    return float(result.stdout.strip())


def stamp(seconds: float) -> str:
    millis = round(seconds * 1000)
    hours, millis = divmod(millis, 3_600_000)
    minutes, millis = divmod(millis, 60_000)
    seconds, millis = divmod(millis, 1000)
    return f"{hours:02}:{minutes:02}:{seconds:02}.{millis:03}"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    audio_files = sorted(SOURCE_DIR.glob("*.ogg"), key=lambda item: item.name.lower())
    model = WhisperModel(str(MODEL_DIR), device="cpu", compute_type="int8", cpu_threads=8)
    generated_at = datetime.now().astimezone().isoformat(timespec="seconds")
    report: list[dict[str, object]] = []

    for index, audio in enumerate(audio_files, start=1):
        duration = duration_seconds(audio)
        segments, info = model.transcribe(
            str(audio),
            language="pt",
            task="transcribe",
            beam_size=5,
            best_of=5,
            vad_filter=True,
            condition_on_previous_text=False,
            initial_prompt=PROMPT,
        )
        rendered = list(segments)
        output = OUTPUT_DIR / f"{audio.stem}.md"
        lines = [
            f"# Transcrição — {audio.stem}",
            "",
            f"- Fonte: `{audio.name}`",
            f"- Duração: {stamp(duration)}",
            f"- Gerada em: {generated_at}",
            "- Modelo: faster-whisper large-v3-turbo · CPU int8",
            f"- Idioma detectado: {info.language} · probabilidade: {info.language_probability:.2%}",
            "- STATUS: HISTÓRICO — não editar",
            "",
            "> Transcrição automática local. Não é transcrição literal/probatória; nomes próprios e trechos ambíguos exigem revisão auditiva.",
            "",
            "## Áudio transcrito",
            "",
        ]
        for segment in rendered:
            text = segment.text.strip()
            if text:
                lines.append(f"[{stamp(segment.start)} --> {stamp(segment.end)}] {text}")
        if len(lines) == 13:
            lines.append("[00:00:00.000 --> 00:00:00.000] (Nenhuma fala detectada automaticamente.)")
        output.write_text("\n".join(lines) + "\n", encoding="utf-8")
        report.append({"source": audio.name, "output": output.name, "duration_seconds": duration, "segments": len(rendered)})
        print(f"[{index}/{len(audio_files)}] {audio.name} -> {output.name} ({len(rendered)} segmentos)", flush=True)

    (OUTPUT_DIR / "_relatorio-execucao.json").write_text(
        json.dumps({"generated_at": generated_at, "source_dir": str(SOURCE_DIR), "files": report}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
