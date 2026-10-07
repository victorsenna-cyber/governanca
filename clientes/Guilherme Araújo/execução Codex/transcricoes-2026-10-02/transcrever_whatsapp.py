from __future__ import annotations

import os
import subprocess
from datetime import datetime
from pathlib import Path

from faster_whisper import WhisperModel


WORKSPACE = Path(r"C:\Users\zioni\Organizacional\01 - Continuum\00 - Local\01 - Governança\clientes\Guilherme Araújo\01 - contexto\WhatsApp")
OUTPUT_DIR = Path(__file__).resolve().parent
MODEL_PATH = Path(r"C:\Ferramentas\asr-modelos\models--mobiuslabsgmbh--faster-whisper-large-v3-turbo\snapshots\0a363e9161cbc7ed1431c9597a8ceaf0c4f78fcf")
AUDIO_NAMES = (
    "WhatsApp Ptt 2026-10-02 at 12.44.50.ogg",
    "WhatsApp Ptt 2026-10-02 at 16.46.02.ogg",
    "WhatsApp Ptt 2026-10-02 at 16.50.59.ogg",
)
INITIAL_PROMPT = (
    "Conversa em português no WhatsApp entre Guilherme Araújo e Victor Senna, "
    "da Continuum AI Systems. Preserve nomes próprios e termos como Diagnóstica "
    "da Permissão, Permissão Sistêmica, Signos, Desafio e Jornada quando forem ouvidos."
)


def duration_seconds(audio: Path) -> float:
    command = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", str(audio),
    ]
    return float(subprocess.check_output(command, text=True, encoding="utf-8").strip())


def timestamp(value: float) -> str:
    milliseconds = round(value * 1000)
    hours, remainder = divmod(milliseconds, 3_600_000)
    minutes, remainder = divmod(remainder, 60_000)
    seconds, milliseconds = divmod(remainder, 1_000)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}.{milliseconds:03d}"


def render(audio: Path, duration: float, language_probability: float, segments: list[tuple[float, float, str]]) -> str:
    created = datetime.now().astimezone().isoformat(timespec="seconds")
    lines = [
        f"# Transcrição automática — {audio.stem}",
        "",
        f"- Fonte original: `{audio}`",
        f"- Duração (ffprobe): {duration:.3f}s",
        f"- Gerada em: {created}",
        "- Modelo: faster-whisper `large-v3-turbo` · CPU `int8` · 8 threads",
        "- Idioma detectado: português (`pt`)",
        f"- Probabilidade do idioma: {language_probability:.1%}",
        "- STATUS: HISTÓRICO — não editar",
        "",
        "> Aviso: esta é uma transcrição automática local (ASR), não uma transcrição literal ou probatória. Nomes próprios, termos ambíguos e trechos críticos exigem conferência auditiva antes de uso como evidência.",
        "",
        "## Transcrição",
        "",
    ]
    for start, end, text in segments:
        lines.append(f"[{timestamp(start)} --> {timestamp(end)}] {text}")
    if not segments:
        lines.append("[Sem fala reconhecida automaticamente; conferir o áudio.]" )
    return "\n".join(lines) + "\n"


def main() -> None:
    os.environ["HF_HUB_OFFLINE"] = "1"
    if not MODEL_PATH.is_dir():
        raise FileNotFoundError(f"Snapshot local do modelo ausente: {MODEL_PATH}")
    model = WhisperModel(str(MODEL_PATH), device="cpu", compute_type="int8", cpu_threads=8)
    for name in AUDIO_NAMES:
        audio = WORKSPACE / name
        if not audio.is_file():
            raise FileNotFoundError(f"Áudio solicitado ausente: {audio}")
        duration = duration_seconds(audio)
        raw_segments, info = model.transcribe(
            str(audio),
            language="pt",
            beam_size=5,
            vad_filter=True,
            condition_on_previous_text=False,
            initial_prompt=INITIAL_PROMPT,
            repetition_penalty=1.12,
            no_repeat_ngram_size=3,
        )
        segments = [(segment.start, segment.end, segment.text.strip()) for segment in raw_segments if segment.text.strip()]
        output = OUTPUT_DIR / f"{audio.stem}.md"
        output.write_text(render(audio, duration, info.language_probability, segments), encoding="utf-8", newline="\n")
        print(f"{output.name}: {duration:.3f}s; {len(segments)} segmentos")


if __name__ == "__main__":
    main()
