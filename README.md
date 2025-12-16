📖 Assistente de Planos de Estudo Bíblico
Aplicação web Full Stack que gera planos de estudo personalizados de 3 dias baseados em temas ou sentimentos, com foco em organização de código, tipagem forte e simplicidade.

Sobre o Projeto
Este projeto foi desenvolvido como um teste técnico para avaliar:

Organização e estrutura de código

Manipulação de dados

UX/UI básica

Autonomia e tomada de decisão

Documentação clara

Tecnologias Utilizadas
Backend
Node.js

Express.js

TypeScript

CORS

Frontend
React

TypeScript

Axios

CSS3

Ferramentas
npm

ts-node

Estrutura do Projeto
text
assistente-estudo/
├── backend/
│   ├── src/
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── data/
│   │   │   └── studyPlans.ts
│   │   ├── services/
│   │   │   └── planService.ts
│   │   ├── middleware/
│   │   │   └── validation.ts
│   │   ├── routes/
│   │   │   └── planRoutes.ts
│   │   ├── utils/
│   │   │   └── logger.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── .gitignore
Como Executar
Pré-requisitos
Node.js versão 16+

npm ou yarn

1. Backend
bash
cd backend
npm install
npm run dev
O servidor estará rodando em http://localhost:3001

2. Frontend (novo terminal)
bash
cd frontend
npm install
npm run dev
O aplicativo abrirá em http://localhost:3000