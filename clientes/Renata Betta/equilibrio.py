# -*- coding: utf-8 -*-
"""Equilíbrio dinâmico da agenda: presencial x grupo x calls de venda."""

CAP        = 55      # slots/mês (2,5 atendimentos/dia x 22 dias)  [D]
CONV_CT    = 0.55    # consulta -> tratamento                       [D]
ENC        = 4       # encontros por tratamento                     [D]
CONSULTA   = 290                                                  # [D]
TICKET_M   = 2500                                                 # [D]
CONV_CALL  = 0.30    # call de venda -> mentoria                    [H] a medir
SLOT_CALL  = 0.6     # call de 1h vale 0,6 do slot de ~1,75h        [M]
POR_HORARIO= 12      # pessoas por horário de grupo                 [M] parâmetro
CICLO      = 3       # meses de jornada da mentoria                 [D]

CUSTO_TRAT = ENC + 1/CONV_CT          # slots por tratamento FECHADO
print(f"CUSTO REAL DE UM TRATAMENTO = {CUSTO_TRAT:.3f} slots")
print(f"  {ENC} encontros + {1/CONV_CT:.2f} consultas (porque só {CONV_CT:.0%} das consultas fecham)")
print(f"CUSTO DE UM HORÁRIO DE GRUPO = 4 slots/mês, atendendo até {POR_HORARIO} pessoas")
print(f"TAXA DE CÂMBIO: 1 tratamento a menos = {CUSTO_TRAT:.2f} slots = {CUSTO_TRAT/4:.2f} horários de grupo/mês\n")

T0 = CAP/CUSTO_TRAT
REC0 = T0*TICKET_M_BASE if False else T0*2500 + (T0/CONV_CT)*CONSULTA
print(f"HOJE: {T0:.1f} tratamentos · {T0/CONV_CT:.1f} consultas · 0 grupo · receita R$ {REC0:,.0f}\n".replace(',','.'))

print("="*112)
print("TABELA DE EQUILÍBRIO — para cada volume de mentoria, o que sobra de agenda e o preço que segura a receita")
print("="*112)
hdr=(f"{'vendas':>7}{'ativos':>8}{'horár':>7}{'slots':>7}{'slots':>7}{'slots':>7}{'trat.':>7}"
     f"{'receita':>11}{'preço p/':>11}{'preço p/':>11}{'preço p/':>11}")
print(hdr)
print(f"{'ment/mês':>7}{'':>8}{'/sem':>7}{'grupo':>7}{'calls':>7}{'livres':>7}{'possív':>7}"
      f"{'mentoria':>11}{'manter':>11}{'+20%':>11}{'+50%':>11}")
print("-"*112)

linhas=[]
for V in [0,1,2,3,5,8,10,14,18]:
    ativos   = V*CICLO
    horarios = 0 if V==0 else -(-ativos//POR_HORARIO)      # teto
    s_grupo  = horarios*4
    calls    = 0 if V==0 else V/CONV_CALL
    s_calls  = calls*SLOT_CALL
    livres   = CAP - s_grupo - s_calls
    T        = max(livres,0)/CUSTO_TRAT
    rec_ment = V*TICKET_M
    # preço do tratamento necessário para a receita total bater cada alvo
    def preco(alvo):
        if T<=0: return None
        return (alvo - rec_ment - (T/CONV_CT)*CONSULTA)/T
    p_manter = preco(REC0); p20 = preco(REC0*1.2); p50 = preco(REC0*1.5)
    linhas.append((V,ativos,horarios,s_grupo,s_calls,livres,T,rec_ment,p_manter,p20,p50))
    f=lambda x: f"{x:>11,.0f}".replace(',','.') if x and x>0 else f"{'—':>11}"
    print(f"{V:>7}{ativos:>8}{horarios:>7}{s_grupo:>7.0f}{s_calls:>7.1f}{livres:>7.1f}{T:>7.1f}"
          f"{rec_ment:>10,.0f}".replace(',','.') + f(p_manter)+f(p20)+f(p50))
print("-"*112)
print(f"premissas: conversão da call de venda {CONV_CALL:.0%} [H, a medir] · call = {SLOT_CALL} slot ·")
print(f"           {POR_HORARIO} pessoas por horário · jornada de {CICLO} meses · receita base R$ {REC0:,.0f}".replace(',','.'))

print()
print("="*112)
print("🔴 O QUE A CALL DE VENDA CUSTA — e onde ela vira o novo gargalo")
print("="*112)
print("O modelo da escada (escada.py) NÃO contava as calls de venda. Contando, ele quebra.\n")
print(f"{'vendas/mês':>11}{'calls necess.':>15}{'slots em call':>15}{'slots grupo':>13}{'total':>9}{'sobra p/ presencial':>21}")
for V in [3,5,10,14,18]:
    calls=V/CONV_CALL; sc=calls*SLOT_CALL
    hor=-(-V*CICLO//POR_HORARIO); sg=hor*4
    print(f"{V:>11}{calls:>15.0f}{sc:>15.1f}{sg:>13.0f}{sc+sg:>9.1f}{CAP-sc-sg:>21.1f}")
print("\n⭐ A partir de ~14 vendas/mês a venda 1-a-1 consome mais agenda que a entrega.")
print("   O teto se desloca do ATENDIMENTO para a VENDA.\n")

print("="*112)
print("A SAÍDA: o mecanismo de venda também precisa escalar")
print("="*112)
SLOT_WS = 2.5     # workshop de 3 noites x 1,5h ≈ 2,5 slots
def custo_venda(V, modo):
    if modo=="call 1-a-1":      return (V/CONV_CALL)*SLOT_CALL
    if modo=="workshop mensal": return SLOT_WS                      # 1 edição/mês, independe de V
    if modo=="página / VSL":    return 0
print(f"{'modo':<20}{'slots p/ 3 vendas':>19}{'p/ 10 vendas':>15}{'p/ 18 vendas':>15}{'observação'}")
for modo,obs in [("call 1-a-1","conversão alta, custo de tempo cresce com o volume"),
                 ("workshop mensal","é a call de vendas em grupo. Custo fixo"),
                 ("página / VSL","zero tempo dela, conversão menor, precisa de volume")]:
    a,b,c = (custo_venda(v,modo) for v in (3,10,18))
    print(f"{modo:<20}{a:>19.1f}{b:>15.1f}{c:>15.1f}   {obs}")
print("\n⭐ Workshop de 3 noites custa 2,5 slots e converte a sala inteira.")
print("   Para 10 vendas: 2,5 slots via workshop contra 20 slots via call 1-a-1. 8x mais barato em tempo.")

print()
print("="*112)
print("ESCADA CORRIGIDA — com o custo da venda dentro da conta")
print("="*112)
def linha(nome, T, preco, V, modo, ws_rec=0, grav_rec=0):
    cons=T/CONV_CT
    sp=T*CUSTO_TRAT
    hor=0 if V==0 else -(-V*CICLO//POR_HORARIO)
    sg=hor*4
    sv=custo_venda(V,modo)
    tot_slots=sp+sg+sv
    rec=T*preco+cons*CONSULTA+V*TICKET_M+ws_rec+grav_rec
    return nome,T,preco,V,modo,rec,tot_slots,sp,sg,sv,hor
E=[linha("HOJE",   9.45,2500, 0,"call 1-a-1"),
   linha("MÊS 3",  5.70,5000, 3,"call 1-a-1"),
   linha("MÊS 6",  5.70,5000, 5,"call 1-a-1"),
   linha("MÊS 12", 4.50,6000,10,"workshop mensal", ws_rec=9700),
   linha("MÊS 18", 3.50,6000,18,"workshop mensal", ws_rec=14550, grav_rec=20000)]
print(f"{'':<8}{'trat':>6}{'preço':>8}{'ment':>6}{'mecanismo':>18}{'RECEITA':>11}{'slots':>7}{'  = pres':>9}{'+grupo':>8}{'+venda':>8}{'ocup':>7}")
for n,T,p,V,m,rec,st,sp,sg,sv,hor in E:
    print(f"{n:<8}{T:>6.1f}{p:>8,.0f}{V:>6}{m:>18}{rec:>11,.0f}{st:>7.1f}{sp:>9.1f}{sg:>8.0f}{sv:>8.1f}{st/CAP*100:>6.0f}%".replace(',','.'))
print("-"*112)
print("premissas novas: workshop 1x/mês = 2,5 slots · a partir do mês 12 o workshop substitui a call 1-a-1")
print("                 conversão da call 30% [H] · 12 pessoas/horário [M] · call = 0,6 slot [M]")
