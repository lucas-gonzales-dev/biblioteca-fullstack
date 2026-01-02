# Biblioteca Online API

Sistema de gerenciamento de livros desenvolvido para o desafio de Node.js e React da DNC.

## Sobre

Aplicação fullstack para gerenciamento de livros de uma biblioteca online. Possui uma API REST em Node.js/Express integrada com um front-end em React/Vite. Permite cadastrar, editar, visualizar e deletar livros.

## Tecnologias

**Backend:**
- Node.js
- Express
- CORS

**Frontend:**
- React 18
- Vite
- React Router DOM
- Axios
- Sass

## Como usar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/lucas-gonzales/RID99751_Desafio-Desenvolva-uma-API-e-integre-ao-front-end-de-uma-aplica-o.git
cd RID99751_Desafio-Desenvolva-uma-API-e-integre-ao-front-end-de-uma-aplica-o
```

**Backend (Terminal 1):**
```bash
cd backend
npm install
npm start
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm install
npm run dev
```

Acesse http://localhost:5173 no navegador.

## Estrutura

```
├── backend/
│   └── src/
│       ├── controllers/
│       │   └── livrosController.js
│       ├── models/
│       │   └── livrosModel.js
│       ├── routes/
│       │   └── livrosRoutes.js
│       └── server.js
│
└── frontend/
    └── src/
        ├── api/
        │   └── LivrosService.js
        ├── components/
        │   └── Header/
        └── views/
            ├── Home/
            ├── Livros/
            ├── LivrosCadastro/
            └── LivrosEdicao/
```

## API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /livros | Lista todos os livros |
| GET | /livros/:id | Busca livro por ID |
| POST | /livros | Cadastra novo livro |
| PUT | /livros/:id | Atualiza livro |
| DELETE | /livros/:id | Remove livro |

## Layout

O design foi baseado no protótipo do Figma.

- Listagem de livros em cards
- Formulário de cadastro centralizado
- Formulário de edição com dados pré-carregados

## Funcionalidades

- Listar todos os livros cadastrados
- Cadastrar livros (ID, Título, Páginas, ISBN, Editora)
- Editar informações dos livros
- Deletar livros do sistema

## Autor

Lucas Gonzales
