📖 Assistente de Planos de Estudo BíblicoAplicação web que gera planos de estudo de 3 dias baseados em temas ou sentimentos, com foco em organização de código e simplicidade.🚀 Tecnologias UtilizadasBackendNode.jsExpressTypeScriptCORSFrontendReactTypeScriptAxiosCSS3📁 Estrutura do ProjetoA estrutura segue o padrão de repositório unificado (monorepo simples), separando claramente o Backend e o Frontend:assistente-estudo/
├── backend/
│   ├── src/
│   │   ├── types/          # Definições de tipos (interfaces)
│   │   ├── services/       # Lógica de negócio (Mock da IA, Histórico)
│   │   ├── controllers/    # Controladores das rotas
│   │   ├── routes/         # Definição de rotas do Express
│   │   └── server.ts       # Servidor principal (ponto de entrada)
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── services/       # Comunicação com API (Axios)
│   │   ├── App.tsx         # Componente principal e UI (Simples e Contido)
│   │   └── styles/App.css  # Estilos básicos e Mobile First
│   └── package.json
└── .gitignore

⚙️ Como ExecutarPré-requisitosNode.js instalado (versão 16+)NPM ou Yarn1. BackendO servidor Node.js/Express deve ser iniciado primeiro.Bashcd backend
npm install
npm run dev
💡 O servidor estará rodando em http://localhost:3001 (ou a porta configurada no seu .env).2. FrontendO aplicativo React/TypeScript consome a API do backend.Bashcd frontend
npm install
npm run dev
💡 O aplicativo abrirá automaticamente em http://localhost:3000.🔌 API EndpointsPOST /api/generate-planGera um novo plano de estudo e retorna o histórico atualizado.Request Body:JSON{
  "tema": "Ansiedade"
}
Response (Exemplo):JSON{
  "plan": [
    {
      "dia": 1,
      "title": "Reflexão sobre Ansiedade",
      "verse": "Filipenses 4:6-7",
      "summary": "Foco na entrega das preocupações a Deus...",
      "practicalTask": "Reserve 15 minutos para meditar..."
    }
    // ... dia 2 e dia 3
  ],
  "history": [
    {
      "id": "1234567890",
      "theme": "Ansiedade",
      "dateGenerated": "2025-12-16T...",
      "plan": [ ... ]
    }
  ]
}

GET /api/history
(Nota: Esta funcionalidade está integrada na resposta do POST, mas a rota pode ser usada para um retorno direto do histórico em memória.)

Retorna os últimos 3 planos gerados.

✨ Funcionalidades
✅ Geração de planos personalizados por tema

✅ Validação de entrada (campo não vazio)

✅ Histórico dos últimos 3 planos (armazenados em memória)

✅ Interface responsiva (Mobile First)

✅ Feedback visual de carregamento e erro

✅ Uso de TypeScript em todo o Full Stack