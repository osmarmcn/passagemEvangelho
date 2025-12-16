
import express from 'express'
import cors from 'cors'
import planRoutes from './routes/planRoutes.js'


const app = express()


const PORT = 3001


app.use(cors())
app.use(express.json()) 


app.get('/', (req, res) => {
  res.json({ 
    message: 'API do Assistente de Estudo está rodando!',
    endpoints: {
      generatePlan: 'POST /api/generate-plan',
      history: 'GET /api/history'
    }
  })
})


app.use('/api', planRoutes)


app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`)
})