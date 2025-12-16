
📖 Assistente de Planos de Estudo Bíblico
Aplicação web que gera planos de estudo de 3 dias baseados em temas ou sentimentos.
🚀 Tecnologias Utilizadas
Backend

Node.js
Express
TypeScript
CORS

Frontend

React
TypeScript
Axios
CSS3

📁 Estrutura do Projeto
assistente-estudo/
├── backend/
│   ├── src/
│   │   ├── types/        # Definições de tipos
│   │   ├── services/      # Lógica de negócio
│   │   ├── controllers/   # Controladores das rotas
│   │   ├── routes/        # Definição de rotas
│   │   └── server.ts      # Servidor principal
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── services/      # Comunicação com API
    │   ├── App.tsx        # Componente principal
    │   └── App.css        # Estilos
    └── package.json
⚙️ Como Executar
Pré-requisitos

Node.js instalado (versão 16+)
NPM ou Yarn

Backend
bashcd backend
npm install
npm run dev
O servidor estará rodando em http://localhost:3001
Frontend
bashcd frontend
npm install
npm start
O aplicativo abrirá em http://localhost:3000
🔌 API Endpoints
POST /api/generate-plan
Gera um novo plano de estudo.
Request Body:
json{
  "tema": "Ansiedade"
}
Response:
json{
  "id": "1234567890",
  "tema": "Ansiedade",
  "criadoEm": "2025-12-16T...",
  "dias": [
    {
      "dia": 1,
      "versiculo": "Filipenses 4:6-7",
      "resumo": "Não andem ansiosos...",
      "tarefaPratica": "Escreva 3 coisas..."
    }
  ]
}
GET /api/history
Retorna os últimos 3 planos gerados.
✨ Funcionalidades

✅ Geração de planos personalizados por tema
✅ Validação de entrada (mínimo 3 caracteres)
✅ Histórico dos últimos 3 planos
✅ Interface responsiva
✅ Feedback visual de carregamento
✅ Tratamento de erros

🎯 Temas Suportados

Ansiedade/Medo: Versículos de paz e conforto
Gratidão: Salmos de louvor
Liderança: Princípios de liderança servidora
Outros: Plano genérico de crescimento espiritual

👨‍💻 Desenvolvedor
Projeto desenvolvido como teste técnico demonstrando habilidades em:

Desenvolvimento Full Stack
TypeScript
Arquitetura de Software
Clean Code
Validações e Tratamento de Erros

📄 Licença
Este projeto foi desenvolvido para fins de avaliação técnica.