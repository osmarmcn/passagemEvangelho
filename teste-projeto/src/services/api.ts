import axios from 'axios'


const API_URL = 'http://localhost:3001/api'


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


export async function generatePlan(tema: string): Promise<StudyPlan> {
  const response = await axios.post(`${API_URL}/generate-plan`, { tema })
  return response.data
}


export async function getHistory(): Promise<StudyPlan[]> {
  const response = await axios.get(`${API_URL}/history`)
  return response.data
}