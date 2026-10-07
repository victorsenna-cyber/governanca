# -*- coding: utf-8 -*-
"""Modelo econômico Renata Betta — Assessoria Completa + tráfego pago."""

# ---------- PREMISSAS ----------
# [D] = dado dela (call 21/08) · [M] = modelo/derivado · [H] = hipótese a validar
P = dict(
    leads_mes            = 100,    # [D] C-05
    conv_lead_consulta   = 0.275,  # [D] C-06 (5-6 de 20)
    conv_consulta_trat   = 0.55,   # [D] C-07 (50-60%)
    ticket_consulta      = 290,    # [D] C-02
    ticket_tratamento    = 2500,   # [D] C-03
    encontros_trat       = 4,      # [D] C-03
    duracao_trat_meses   = 2.5,    # [D] C-04
    atend_dia            = 2.5,    # [D] C-32 (2 a 3)
    dias_uteis_mes       = 22,     # [M]
    ticket_mentoria      = 2500,   # [D] C-12 (praticado; tb 3000 e 4000)
    margem_mentoria      = 0.90,   # [M] custo marginal ~zero; 10% p/ gateway e plataforma
    margem_tratamento    = 0.95,   # [M] presencial, custo variável mínimo
)

def capacidade_sessoes(p): return p['atend_dia'] * p['dias_uteis_mes']

def demanda_teorica(p):
    """Se a agenda fosse infinita."""
    consultas = p['leads_mes'] * p['conv_lead_consulta']
    trat      = consultas * p['conv_consulta_trat']
    sessoes   = consultas + trat * p['duracao_trat_meses'] * (p['encontros_trat']/p['duracao_trat_meses'])
    receita   = consultas*p['ticket_consulta'] + trat*p['ticket_tratamento']
    return consultas, trat, sessoes, receita

def limitado_por_agenda(p):
    """Resolve T (tratamentos/mês) que satura a agenda.
    sessoes(T) = consultas + encontros_ativos
      consultas        = T / conv_consulta_trat
      encontros_ativos = T * duracao * (encontros/duracao) = T * encontros
    """
    cap = capacidade_sessoes(p)
    coef = (1/p['conv_consulta_trat']) + p['encontros_trat']
    T = cap / coef
    consultas = T / p['conv_consulta_trat']
    leads_usados = consultas / p['conv_lead_consulta']
    receita = consultas*p['ticket_consulta'] + T*p['ticket_tratamento']
    return T, consultas, leads_usados, receita, cap

c_t, t_t, s_t, r_t = demanda_teorica(P)
T, cons, leads_u, rec, cap = limitado_por_agenda(P)

print("="*66)
print("1. O TETO — o funil entrega mais do que a agenda absorve")
print("="*66)
print(f"Capacidade da agenda ............ {cap:.0f} sessões/mês  [{2*22:.0f} a {3*22:.0f}]")
print(f"Sessões que o funil exigiria .... {c_t + t_t*P['encontros_trat']:.0f} sessões/mês")
print(f"  consultas teóricas ........... {c_t:.1f}/mês")
print(f"  tratamentos teóricos ......... {t_t:.1f}/mês")
print(f"GAP ............................. {c_t + t_t*P['encontros_trat'] - cap:.0f} sessões/mês")
print()
print("--- O que a agenda de fato comporta ---")
print(f"Tratamentos/mês (saturando) ..... {T:.1f}")
print(f"Consultas/mês ................... {cons:.1f}")
print(f"Leads consumidos ................ {leads_u:.0f} de {P['leads_mes']}")
print(f"LEADS SEM DESTINO ............... {P['leads_mes']-leads_u:.0f}/mês")
print(f"Receita estimada hoje ........... R$ {rec:,.0f}/mês".replace(',','.'))
print(f"Receita teórica do funil ........ R$ {r_t:,.0f}/mês".replace(',','.'))
print(f"RECEITA NÃO REALIZADA ........... R$ {r_t-rec:,.0f}/mês".replace(',','.'))

print()
print("="*66)
print("2. AS DUAS ALAVANCAS")
print("="*66)

def alavanca_preco(p, novo_preco, perda_volume, T_base):
    """Aumento de preço do tratamento presencial. Custo zero, sem construção."""
    T_novo = T_base * (1 - perda_volume)
    rec_antes = T_base * p['ticket_tratamento'] * p['margem_tratamento']
    rec_depois = T_novo * novo_preco * p['margem_tratamento']
    sessoes_liberadas = (T_base - T_novo) * (p['encontros_trat'] + 1/p['conv_consulta_trat'])
    return rec_depois - rec_antes, T_novo, sessoes_liberadas

print("\n--- ALAVANCA 1: preço do tratamento presencial (semana 2, custo zero) ---")
print(f"{'cenário':<34}{'preço':>8}{'perda vol':>11}{'ganho/mês':>13}{'agenda liberada':>18}")
casos = [("+40%  (2.500 -> 3.500)", 3500, 0.20),
         ("+100% (2.500 -> 5.000)", 5000, 0.40),
         ("+100% com perda menor",  5000, 0.30)]
alav1 = {}
for nome, preco, perda in casos:
    g, Tn, lib = alavanca_preco(P, preco, perda, T)
    alav1[nome] = g
    print(f"{nome:<34}{preco:>8}{perda*100:>10.0f}%{g:>12,.0f}{lib:>13.1f} sessões".replace(',','.'))

print("\n--- ALAVANCA 2: mentoria absorve o excedente de leads ---")
excedente = P['leads_mes'] - leads_u
margem_ment = P['ticket_mentoria'] * P['margem_mentoria']
print(f"Leads sem destino hoje .......... {excedente:.0f}/mês")
print(f"Margem por venda de mentoria .... R$ {margem_ment:,.0f}".replace(',','.'))
print(f"{'cenário':<22}{'conv. lead->mentoria':>22}{'vendas/mês':>13}{'margem/mês':>14}")
alav2 = {}
for nome, conv in [("conservador", 0.05), ("provável", 0.075), ("otimista", 0.125)]:
    v = excedente * conv
    alav2[nome] = (v, v*margem_ment)
    print(f"{nome:<22}{conv*100:>21.1f}%{v:>13.1f}{v*margem_ment:>13,.0f}".replace(',','.'))
print("\n[conv. lead->mentoria = a calibrar. n=0 no funil digital de mentoria.]")
print("[Referência interna: lead->consulta presencial = 27,5%; consulta->tratamento = 55%.]")

print()
print("="*66)
print("3. BREAKEVEN E FLUXO MÊS A MÊS")
print("="*66)

HONORARIO = 4500
VERBA     = {"conservador": 2000, "provável": 3000, "otimista": 3000}

print("\n--- Breakeven mensal (quantas vendas de mentoria pagam tudo) ---")
for v in (2000, 3000, 5000):
    custo = HONORARIO + v
    print(f"honorário 4.500 + verba {v:>5} = R$ {custo:>6,.0f}/mês".replace(',','.') +
          f"  ->  {custo/margem_ment:>4.1f} vendas/mês (ticket 2.500)" +
          f"  |  {custo/(3000*P['margem_mentoria']):>4.1f} (ticket 3.000)")

print("\n--- Breakeven COM a alavanca de preço já rodando (+40%, conservadora) ---")
for v in (2000, 3000, 5000):
    resid = HONORARIO + v - alav1["+40%  (2.500 -> 3.500)"]
    print(f"verba {v:>5}: custo residual R$ {resid:>6,.0f}".replace(',','.') +
          f"  ->  {max(resid,0)/margem_ment:>4.1f} vendas/mês")

def fluxo(cenario, ganho_preco, vendas_mes, verba, meses=6, rampa=(0,0.5,1,1,1,1)):
    """rampa = fração das vendas-alvo em cada mês (G1 produz dado, não lucro)."""
    linhas=[]; ac_out=0; ac_in=0; payback=None
    for m in range(1, meses+1):
        out = HONORARIO + verba
        gp  = ganho_preco if m>=1 else 0          # preço entra no mês 1
        gm  = vendas_mes * rampa[m-1] * margem_ment
        inn = gp + gm
        ac_out += out; ac_in += inn
        if payback is None and ac_in >= ac_out: payback = m
        linhas.append((m, out, gp, gm, inn, ac_out, ac_in, ac_in-ac_out))
    return linhas, payback

cen = [
  ("CONSERVADOR", alav1["+40%  (2.500 -> 3.500)"], alav2["conservador"][0], VERBA["conservador"]),
  ("PROVÁVEL",    alav1["+100% (2.500 -> 5.000)"], alav2["provável"][0],    VERBA["provável"]),
  ("OTIMISTA",    alav1["+100% com perda menor"],  alav2["otimista"][0],    VERBA["otimista"]),
]
for nome, gp, vm, vb in cen:
    linhas, pb = fluxo(nome, gp, vm, vb)
    print(f"\n### {nome}  (preço +R$ {gp:,.0f}/mês · {vm:.1f} vendas/mês · verba R$ {vb:,.0f})".replace(',','.'))
    print(f"{'mês':>4}{'desembolso':>12}{'preço':>10}{'mentoria':>11}{'entrada':>11}{'acum. saída':>13}{'acum. entrada':>15}{'saldo':>11}")
    for (m,out,g1,g2,inn,ao,ai,s) in linhas:
        print(f"{m:>4}{out:>12,.0f}{g1:>10,.0f}{g2:>11,.0f}{inn:>11,.0f}{ao:>13,.0f}{ai:>15,.0f}{s:>11,.0f}".replace(',','.'))
    print(f"  PAYBACK: mês {pb}" if pb else "  PAYBACK: não ocorre em 6 meses")
    print(f"  Saldo acumulado em 6 meses: R$ {linhas[-1][7]:,.0f}".replace(',','.'))

print()
print("="*66)
print("4. A ALAVANCA QUE FALTAVA — a base já atendida")
print("="*66)
print("A bio declara '+500 pessoas ajudadas' [H, validar]. Nunca citada na call.")
print("Custo de mídia para falar com ela: ZERO. É a régua-mãe: caixa agora, antes de construção.")
print(f"{'cenário':<16}{'base':>8}{'conv. 90d':>11}{'vendas':>9}{'margem total':>15}")
alav3 = {}
for nome, conv in [("conservador",0.01), ("provável",0.02), ("otimista",0.04)]:
    v = 500*conv; alav3[nome]=v
    print(f"{nome:<16}{500:>8}{conv*100:>10.0f}%{v:>9.0f}{v*margem_ment:>14,.0f}".replace(',','.'))

def fluxo3(gp, vendas_rec, vendas_base, verba, meses=6,
           rampa_rec=(0,0.5,1,1,1,1), rampa_base=(0.2,0.4,0.4,0,0,0)):
    linhas=[]; ao=0; ai=0; pb=None
    for m in range(1, meses+1):
        out = HONORARIO + verba
        g_p = gp
        g_m = vendas_rec * rampa_rec[m-1] * margem_ment
        g_b = vendas_base * rampa_base[m-1] * margem_ment
        inn = g_p+g_m+g_b
        ao+=out; ai+=inn
        if pb is None and ai>=ao: pb=m
        linhas.append((m,out,g_p,g_m,g_b,inn,ao,ai,ai-ao))
    return linhas, pb

print()
print("="*66)
print("5. FLUXO COM AS TRÊS ALAVANCAS")
print("="*66)
cen3 = [
 ("CONSERVADOR", alav1["+40%  (2.500 -> 3.500)"], alav2["conservador"][0], alav3["conservador"], 2000),
 ("PROVÁVEL",    alav1["+100% (2.500 -> 5.000)"], alav2["provável"][0],    alav3["provável"],    3000),
 ("OTIMISTA",    alav1["+100% com perda menor"],  alav2["otimista"][0],    alav3["otimista"],    3000),
]
resumo={}
for nome, gp, vr, vb_, verba in cen3:
    L, pb = fluxo3(gp, vr, vb_, verba)
    print(f"\n### {nome}   verba R$ {verba:,.0f}/mês · desembolso R$ {HONORARIO+verba:,.0f}/mês".replace(',','.'))
    print(f"{'mês':>4}{'saída':>9}{'preço':>9}{'mentoria':>10}{'base':>9}{'entrada':>10}{'ac.saída':>11}{'ac.entrada':>12}{'saldo':>10}")
    for (m,out,g1,g2,g3,inn,ao,ai,s) in L:
        print(f"{m:>4}{out:>9,.0f}{g1:>9,.0f}{g2:>10,.0f}{g3:>9,.0f}{inn:>10,.0f}{ao:>11,.0f}{ai:>12,.0f}{s:>10,.0f}".replace(',','.'))
    resumo[nome]=(pb, L[-1][8], HONORARIO+verba)
    print(f"  PAYBACK: mês {pb}" if pb else "  PAYBACK: NÃO OCORRE em 6 meses")
    print(f"  Saldo 6 meses: R$ {L[-1][8]:,.0f}".replace(',','.') + f"  |  ROI sobre desembolso: {L[-1][8]/L[-1][6]*100:.0f}%")

print()
print("="*66)
print("6. ÂNCORA 7 — VIABILIDADE NOSSA (não vai ao cliente)")
print("="*66)
PISO = 250
esc = {
 "M1 construção": dict(icp_oferta_narrativa=8, roteiro_call=3, pagina=8, criativos=6,
                       campanha_tracking=5, onboarding_calls=3),
 "M2-M6 operação (por mês)": dict(gestao_campanha=5, criativos_novos=3.5,
                                  call_quinzenal_relatorio=3, ajustes_copy_pagina=2),
}
h_m1 = sum(esc["M1 construção"].values())
h_op = sum(esc["M2-M6 operação (por mês)"].values())
for fase, itens in esc.items():
    print(f"\n{fase}: {sum(itens.values()):.1f}h")
    for k,v in itens.items(): print(f"   {k:<28}{v:>5.1f}h")

for meses, label in [(6,"6 meses"), (3,"3 meses")]:
    h_tot = h_m1 + h_op*(meses-1)
    receita = HONORARIO*meses
    print(f"\n--- {label} ---")
    print(f"Horas totais ......... {h_tot:.0f}h  ({h_tot/meses:.1f}h/mês)")
    print(f"Receita .............. R$ {receita:,.0f}".replace(',','.'))
    print(f"VALOR-HORA ........... R$ {receita/h_tot:,.0f}/h".replace(',','.') +
          ("  ✓ acima do piso" if receita/h_tot>=PISO else "  ✗ ABAIXO DO PISO"))
    print(f"Teto de horas p/ piso  {receita/PISO:.0f}h  -> folga de {receita/PISO-h_tot:.0f}h")

print("\n--- Sensibilidade: e se estourar as horas? ---")
for extra in (0, 10, 20, 30, 40):
    h = h_m1 + h_op*5 + extra
    vh = HONORARIO*6/h
    print(f"  +{extra:>2}h no contrato -> {h:>3.0f}h totais -> R$ {vh:>3.0f}/h" +
          ("  ✓" if vh>=PISO else "  ✗ FURA O PISO"))

print("\n--- Capacidade (POLITICAS §4) ---")
print(f"Consumo mensal desta conta: {h_op:.1f}h/mês (M2+), pico {h_m1:.0f}h no M1")
print("Onboardings simultâneos: verificar com Nakielly. Gate NÃO rodado.")

print()
print("="*66)
print("7. GATE DE ESCALA — quando subir verba (METODO-TRAFEGO-PAGO §2.2/§2.3)")
print("="*66)
lucro_venda = margem_ment
cpa_max_30 = lucro_venda*0.30
cpa_max_50 = lucro_venda*0.50
print(f"Lucro por venda de mentoria ......... R$ {lucro_venda:,.0f}".replace(',','.'))
print(f"CPA máximo (30% do lucro, padrão) ... R$ {cpa_max_30:,.0f}".replace(',','.'))
print(f"CPA máximo (50%, se LTV comprovado) . R$ {cpa_max_50:,.0f}".replace(',','.'))
for conv in (0.05, 0.075, 0.125):
    print(f"  conv lead->venda {conv*100:>4.1f}%  ->  CPL máximo R$ {cpa_max_30*conv:>6.2f}"
          f"   (a 50%: R$ {cpa_max_50*conv:>6.2f})")
print("\nPiso de eventos: otimizar para LEAD/conversa (não compra).")
print("Alvo: 30-50 eventos/semana. A R$25 de CPL [H] -> R$ 750-1.250/semana = R$ 3.000-5.000/mês.")
print("Verba < R$ 2.000/mês valida MENSAGEM, não escala. Dizer isso por escrito (§5.3).")

print()
print("="*66)
print("8. O QUE MUDA NO FATURAMENTO DELA (visão que ela entende)")
print("="*66)
def faturamento(preco_trat, perda, vendas_ment, p=P, T_base=T):
    Tn = T_base*(1-perda)
    cons_n = Tn/p['conv_consulta_trat']
    f_pres = cons_n*p['ticket_consulta'] + Tn*preco_trat
    f_ment = vendas_ment*p['ticket_mentoria']
    return f_pres, f_ment, f_pres+f_ment, Tn, cons_n

f0 = cons*P['ticket_consulta'] + T*P['ticket_tratamento']
print(f"HOJE (modelo) ......................... R$ {f0:,.0f}/mês".replace(',','.'))
print(f"   {T:.1f} tratamentos a 2.500 + {cons:.1f} consultas a 290")
print(f"   sessões usadas: {cap:.0f}/{cap:.0f}  (agenda saturada)")
print()
linhas=[("CONSERVADOR",3500,0.20,alav2['conservador'][0]),
        ("PROVÁVEL",   5000,0.40,alav2['provável'][0]),
        ("OTIMISTA",   5000,0.30,alav2['otimista'][0])]
print(f"{'cenário mês 6':<15}{'presencial':>13}{'mentoria':>11}{'TOTAL':>12}{'vs hoje':>11}{'trat/mês':>10}{'sessões':>10}")
for nome,pr,pe,vm in linhas:
    fp,fm,ft,Tn,cn = faturamento(pr,pe,vm)
    sess = cn + Tn*P['encontros_trat']
    print(f"{nome:<15}{fp:>13,.0f}{fm:>11,.0f}{ft:>12,.0f}{ft-f0:>+11,.0f}{Tn:>10.1f}{sess:>10.0f}".replace(',','.'))
print("\n[mentoria em grupo consome 1 horário/semana, nao 1 horário por aluno]")
print("[agenda liberada pelo aumento de preço é o que cria espaço para o grupo]")

print()
print("="*66)
print("9. ESCALA — quando, e o que escalar")
print("="*66)
etapas = [
 ("G0","sem. 1-2","baseline medido + PREÇO ajustado","caixa no mês 1, custo zero","números na mão"),
 ("G1","mês 1",   "oferta escrita, 1 página, campanha no ar","gerar DADO, não lucro","CPL medido + 30-50 eventos/sem"),
 ("G2","mês 2-3", "oferta corrigida sobre o dado de G1","atingir BREAKEVEN","CPA <= alvo em 1 combinação, 2 sem."),
 ("G3","mês 4-5", "CPA estável dentro da faixa","permitir ESCALA","2 meses de CPA na faixa"),
 ("G4","mês 6+",  "verba sobe mantendo CPA","MULTIPLICAR","-"),
]
print(f"{'G':<4}{'quando':<10}{'o que é':<42}{'objetivo':<24}{'gate p/ avançar'}")
for g in etapas: print(f"{g[0]:<4}{g[1]:<10}{g[2]:<42}{g[3]:<24}{g[4]}")
print("\nREGRA: verba só sobe em G3. Subir verba em G1 ou G2 é queimar dinheiro em aprendizado sujo.")
print("Probabilidade de avanço G1->G2: n=0. Não temos dado do funil digital de mentoria dela.")
