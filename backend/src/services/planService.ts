

import type { StudyPlan, DayPlan } from '../types/Plan.js'


let plansHistory: StudyPlan[] = []

export function generatePlan(tema: string): StudyPlan {
  const temaLower = tema.toLowerCase().trim()
  let dias: DayPlan[] = []

  
  if (temaLower.includes('ansiedade') || temaLower.includes('medo')) {
    dias = [
      {
        dia: 1,
        versiculo: 'Filipenses 4:6-7',
        resumo: 'Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, apresentem seus pedidos a Deus.',
        tarefaPratica: 'Escreva 3 coisas que te deixam ansioso(a) e ore por cada uma delas.'
      },
      {
        dia: 2,
        versiculo: 'Mateus 6:34',
        resumo: 'Não se preocupem com o amanhã, pois o amanhã trará suas próprias preocupações.',
        tarefaPratica: 'Pratique 5 minutos de respiração profunda e meditação na Palavra.'
      },
      {
        dia: 3,
        versiculo: '1 Pedro 5:7',
        resumo: 'Lancem sobre Ele toda a sua ansiedade, porque Ele tem cuidado de vocês.',
        tarefaPratica: 'Faça uma caminhada e agradeça a Deus por 5 bênçãos na sua vida.'
      }
    ]
  } else if (temaLower.includes('gratidão') || temaLower.includes('gratid')) {
    dias = [
      {
        dia: 1,
        versiculo: 'Salmos 100:4',
        resumo: 'Entrem por suas portas com ações de graças e em seus átrios com louvor.',
        tarefaPratica: 'Liste 10 coisas pelas quais você é grato(a) hoje.'
      },
      {
        dia: 2,
        versiculo: '1 Tessalonicenses 5:18',
        resumo: 'Deem graças em todas as circunstâncias, pois esta é a vontade de Deus.',
        tarefaPratica: 'Envie uma mensagem de agradecimento para alguém especial.'
      },
      {
        dia: 3,
        versiculo: 'Salmos 107:1',
        resumo: 'Deem graças ao Senhor porque Ele é bom; o seu amor dura para sempre.',
        tarefaPratica: 'Escreva uma carta de gratidão a Deus pelos últimos 6 meses.'
      }
    ]
  } else if (temaLower.includes('liderança') || temaLower.includes('lider')) {
    dias = [
      {
        dia: 1,
        versiculo: 'Provérbios 16:9',
        resumo: 'O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos.',
        tarefaPratica: 'Defina 3 metas de liderança para esta semana e ore por direção.'
      },
      {
        dia: 2,
        versiculo: 'Mateus 20:26',
        resumo: 'Quem quiser tornar-se importante entre vocês deverá ser servo.',
        tarefaPratica: 'Identifique uma forma de servir sua equipe ou comunidade hoje.'
      },
      {
        dia: 3,
        versiculo: 'Josué 1:9',
        resumo: 'Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor estará com você.',
        tarefaPratica: 'Tome uma decisão difícil que você estava adiando, confiando em Deus.'
      }
    ]
  } else {
    
    dias = [
      {
        dia: 1,
        versiculo: 'Salmos 119:105',
        resumo: 'Lâmpada para os meus pés é a tua palavra e luz para o meu caminho.',
        tarefaPratica: 'Leia um capítulo de Provérbios e anote um ensinamento.'
      },
      {
        dia: 2,
        versiculo: 'Jeremias 29:11',
        resumo: 'Eu é que sei que pensamentos tenho a vosso respeito - planos de paz.',
        tarefaPratica: 'Reflita sobre os planos de Deus para sua vida em oração.'
      },
      {
        dia: 3,
        versiculo: 'Filipenses 4:13',
        resumo: 'Tudo posso naquele que me fortalece.',
        tarefaPratica: 'Escolha um desafio pessoal e peça força a Deus para superá-lo.'
      }
    ]
  }

 
  const newPlan: StudyPlan = {
    id: Date.now().toString(), 
    tema: tema,
    criadoEm: new Date(),
    dias: dias
  }

  
  plansHistory.unshift(newPlan)

  
  if (plansHistory.length > 10) {
    plansHistory = plansHistory.slice(0, 10)
  }

  return newPlan
}


export function getRecentPlans(): StudyPlan[] {
  return plansHistory.slice(0, 3)
}