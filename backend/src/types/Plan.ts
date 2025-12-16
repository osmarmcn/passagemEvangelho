
export interface DayPlan {
  dia: number
  versiculo: string
  resumo: string
  tarefaPratica: string
}


export interface StudyPlan {
  id: string
  tema: string
  criadoEm: Date
  dias: DayPlan[]
}


export interface CreatePlanRequest {
  tema: string
}