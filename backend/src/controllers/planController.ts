import type { Request, Response } from 'express'
import { generatePlan, getRecentPlans } from '../services/planService.js'
import type { CreatePlanRequest } from '../types/Plan.js'

export function createPlan(req: Request, res: Response) {
  try {
    
    if (!req.body) {
      return res.status(400).json({
        error: 'Body da requisição é obrigatório.'
      })
    }

    const { tema } = req.body as Partial<CreatePlanRequest>

    
    if (!tema || typeof tema !== 'string' || tema.trim() === '') {
      return res.status(400).json({
        error: 'O campo tema é obrigatório e deve ser um texto.'
      })
    }

    
    if (tema.trim().length < 3) {
      return res.status(400).json({
        error: 'O tema deve ter pelo menos 3 caracteres.'
      })
    }

    const plan = generatePlan(tema.trim())

    return res.status(201).json(plan)

  } catch (error) {
    console.error('Erro ao criar plano:', error);
    return res.status(500).json({
      error: 'Erro interno ao gerar o plano.'
    })
  }
}

export function getHistory(req: Request, res: Response) {
  try {
    const recentPlans = getRecentPlans();
    return res.status(200).json(recentPlans)
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    return res.status(500).json({
      error: 'Erro interno ao buscar histórico.'
    })
  }
}
