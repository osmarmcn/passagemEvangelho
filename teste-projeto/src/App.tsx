import React, { useState, useEffect } from 'react'
import { generatePlan, getHistory } from './services/api'
import type { StudyPlan } from './services/api'
import './App.css'

function App() {
  
  const [tema, setTema] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentPlan, setCurrentPlan] = useState<StudyPlan | null>(null)
  const [history, setHistory] = useState<StudyPlan[]>([])
  const [error, setError] = useState('')

  
  useEffect(() => {
    loadHistory()
  }, [])

  
  async function loadHistory() {
    try {
      const plans = await getHistory();
      setHistory(plans);
    } catch (err) {
      console.error('Erro ao carregar histórico:', err)
    }
  }

  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!tema.trim()) {
      setError('Por favor, digite um tema ou sentimento.')
      return
    }

    if (tema.trim().length < 3) {
      setError('O tema deve ter pelo menos 3 caracteres.')
      return
    }

    setError('') 
    setLoading(true)

    try {
    
      const plan = await generatePlan(tema);
      setCurrentPlan(plan)
      setTema('')
      loadHistory()
    } catch (err: any) {
    
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Erro ao gerar o plano. Tente novamente.');
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>  Estudo Bíblico</h1>
        <p>Gere um plano de 3 dias baseado em um tema ou sentimento</p>
      </header>

      <main className="App-main">
       
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Ansiedade, Gratidão, Liderança..."
              className="input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="button"
              disabled={loading}
            >
              {loading ? ' Gerando...' : ' Gerar Plano'}
            </button>
          </div>
          
          
          {error && <p className="error">{error}</p>}
        </form>

       
        {currentPlan && (
          <div className="plan-container">
            <h2> Plano: {currentPlan.tema}</h2>
            <div className="days">
              {currentPlan.dias.map((day) => (
                <div key={day.dia} className="day-card">
                  <h3> Dia {day.dia}</h3>
                  <p className="verse"><strong> {day.versiculo}</strong></p>
                  <p className="summary">{day.resumo}</p>
                  <p className="task">
                    <strong> Tarefa Prática:</strong> {day.tarefaPratica}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

       
        {history.length > 0 && (
          <div className="history-container">
            <h2> Últimos Planos Gerados</h2>
            <div className="history-list">
              {history.map((plan) => (
                <div 
                  key={plan.id} 
                  className="history-item"
                  onClick={() => setCurrentPlan(plan)}
                >
                  <h4>{plan.tema}</h4>
                  <small>
                    {new Date(plan.criadoEm).toLocaleDateString('pt-BR')} às{' '}
                    {new Date(plan.criadoEm).toLocaleTimeString('pt-BR')}
                  </small>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App