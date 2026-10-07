# -*- coding: utf-8 -*-
"""Escada estrutural até R$ 100k/mês. Cada fase declara receita, slots e o gate."""
CAP=55; SESS_POR_TRAT=1/0.55+4      # 5,818 slots por tratamento fechado
TICKET_MENT=2500; CONSULTA=290

def presencial(trat, preco):
    cons = trat/0.55
    return trat*preco + cons*CONSULTA, trat*SESS_POR_TRAT

def fase(nome, trat, preco_trat, vendas_ment, horarios_sem, workshop_rec, workshop_slots, gravado_rec, gravado_slots):
    rp, sp = presencial(trat, preco_trat)
    rm = vendas_ment*TICKET_MENT
    sm = horarios_sem*4
    total = rp+rm+workshop_rec+gravado_rec
    slots = sp+sm+workshop_slots+gravado_slots
    return dict(nome=nome, presencial=rp, mentoria=rm, workshop=workshop_rec,
                gravado=gravado_rec, total=total, slots=slots, trat=trat,
                preco=preco_trat, vendas=vendas_ment, ativos=vendas_ment*3)

F=[
 fase("HOJE",              9.5, 2500,  0, 0,     0,0,      0,0),
 fase("MÊS 3",             5.7, 5000,  3, 1,     0,0,      0,0),
 fase("MÊS 6",             5.7, 5000,  5, 2,     0,0,      0,0),
 fase("MÊS 12",            5.0, 6000, 10, 3,  9700,2,      0,0),
 fase("MÊS 18",            4.0, 6000, 18, 4,  9700,2, 20000,2),
]
print("="*104)
print("ESCADA ESTRUTURAL — de onde ela está até R$ 100k/mês")
print("="*104)
h=f"{'':<10}{'presencial':>13}{'mentoria':>11}{'workshop':>10}{'gravado':>10}{'TOTAL':>12}{'slots':>8}{'de 55':>8}{'trat/mês':>10}{'ativos':>8}"
print(h); print("-"*104)
for f in F:
    print(f"{f['nome']:<10}{f['presencial']:>13,.0f}{f['mentoria']:>11,.0f}{f['workshop']:>10,.0f}"
          f"{f['gravado']:>10,.0f}{f['total']:>12,.0f}{f['slots']:>8.0f}{f['slots']/CAP*100:>7.0f}%"
          f"{f['trat']:>10.1f}{f['ativos']:>8.0f}".replace(',','.'))
print("-"*104)
print("presencial = tratamentos x preço + consultas a R$ 290")
print("slots = 1 atendimento individual OU 1 horário de grupo (o grupo atende muitos no mesmo slot)")
print("ativos = mentorados simultâneos em regime (vendas/mês x 3 meses de jornada)")

print()
print("="*104)
print("O QUE CADA FASE EXIGE DA AQUISIÇÃO")
print("="*104)
print(f"{'fase':<10}{'vendas ment/mês':>17}{'leads necessários':>19}{'verba a R$25/lead':>20}{'CPA por venda':>16}{'teto CPA':>10}")
for f in F[1:]:
    if f['vendas']==0: continue
    leads = f['vendas']/0.075
    verba = leads*25
    cpa = verba/f['vendas']
    print(f"{f['nome']:<10}{f['vendas']:>17.0f}{leads:>19.0f}{verba:>19,.0f}{cpa:>16,.0f}{675:>10,.0f}".replace(',','.'))
print("\nconversão lead->mentoria 7,5% (cenário provável) · CPL R$ 25 [hipótese] · teto de CPA = 30% da margem")
