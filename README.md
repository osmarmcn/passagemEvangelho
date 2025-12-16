

## 📖 Assistente de Planos de Estudo Bíblico
Aplicação web Full Stack que gera planos de estudo personalizados de 3 dias baseados em temas ou sentimentos.


## Tecnologias Utilizadas
1.Backend:

Node.js

Express.js

TypeScript

CORS

2.Frontend:
React

TypeScript

Axios

CSS3

Ferramentas
npm

ts-node

## Objetivo do projeto
- O usuário digita um tema e será exibido um plano com passagens bíblicas acompanhadas de ações práticas, que poderão ser seguidas durante um período de três dias.
  
## Funcionalidas
- Um campo de texto onde o usuário digita o tema.

- Exibição de uma lista de passagens bíblicas de acordo com o tema informado.

- Histórico de pesquisas realizadas.


## Estrutura do Projeto
text
```
assistente-estudo/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── planController.ts
│   │   ├── routes/
│   │   │   └── planRoutes.ts
│   │   ├── services/
│   │   │   └── planService.ts
│   │   ├── types/
│   │   │   └── plan.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
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
```
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
