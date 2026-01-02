# Biblioteca API

API em Node.js para gerenciamento de livros de uma biblioteca online.

## 📋 Requisitos

- Node.js (versão 14 ou superior)
- npm

## 🚀 Instalação

1. Acesse a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 📚 Endpoints da API

### Livros

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /livros | Retorna todos os livros |
| GET | /livros/:id | Retorna um livro específico pelo ID |
| POST | /livros | Cadastra um novo livro |
| PUT | /livros/:id | Atualiza um livro existente |
| DELETE | /livros/:id | Remove um livro |

### Estrutura do Livro

```json
{
    "id": 1,
    "titulo": "Nome do Livro",
    "num_paginas": 300,
    "isbn": "978-0000000000",
    "editora": "Nome da Editora"
}
```

### Exemplos de Uso

#### GET /livros
Retorna a lista de todos os livros cadastrados.

**Resposta:**
```json
[
    {
        "id": 1,
        "titulo": "O Senhor dos Anéis",
        "num_paginas": 1200,
        "isbn": "978-0544003415",
        "editora": "HarperCollins"
    }
]
```

#### GET /livros/:id
Retorna os dados de um livro específico.

**Resposta (sucesso):**
```json
{
    "id": 1,
    "titulo": "O Senhor dos Anéis",
    "num_paginas": 1200,
    "isbn": "978-0544003415",
    "editora": "HarperCollins"
}
```

**Resposta (erro):**
```json
{
    "mensagem": "Livro não encontrado"
}
```

#### POST /livros
Cadastra um novo livro.

**Body:**
```json
{
    "id": 4,
    "titulo": "Harry Potter",
    "num_paginas": 309,
    "isbn": "978-8532511010",
    "editora": "Rocco"
}
```

**Resposta (sucesso):**
```
"Livro cadastrado com sucesso!"
```

#### PUT /livros/:id
Atualiza os dados de um livro existente.

**Body:**
```json
{
    "titulo": "Harry Potter e a Pedra Filosofal",
    "num_paginas": 309,
    "isbn": "978-8532511010",
    "editora": "Rocco"
}
```

**Resposta (sucesso):**
```json
{
    "mensagem": "Livro atualizado com sucesso!"
}
```

#### DELETE /livros/:id
Remove um livro do sistema.

**Resposta (sucesso):**
```json
{
    "mensagem": "Livro removido com sucesso!"
}
```

## 🔗 Integração com Front-end

A API está configurada com CORS habilitado para permitir requisições do front-end React que roda em `http://localhost:5173`.

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── controllers/
│   │   └── livrosController.js
│   ├── models/
│   │   └── livrosModel.js
│   ├── routes/
│   │   └── livrosRoutes.js
│   └── server.js
├── package.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **CORS** - Middleware para habilitar CORS
