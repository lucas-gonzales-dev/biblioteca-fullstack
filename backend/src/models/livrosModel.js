// Banco de dados em memória para armazenar os livros
let livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        num_paginas: 1200,
        isbn: "978-0544003415",
        editora: "HarperCollins"
    },
    {
        id: 2,
        titulo: "Dom Quixote",
        num_paginas: 863,
        isbn: "978-8535914849",
        editora: "Companhia das Letras"
    },
    {
        id: 3,
        titulo: "1984",
        num_paginas: 416,
        isbn: "978-0451524935",
        editora: "Signet Classic"
    }
];

// Retorna todos os livros
const getAllLivros = () => {
    return livros;
};

// Retorna um livro pelo ID
const getLivroById = (id) => {
    return livros.find(livro => livro.id === id);
};

// Cria um novo livro
const createLivro = (livroData) => {
    const livroExistente = livros.find(livro => livro.id === livroData.id);
    if (livroExistente) {
        return { error: true, message: 'Já existe um livro com este ID' };
    }
    
    const novoLivro = {
        id: livroData.id,
        titulo: livroData.titulo,
        num_paginas: livroData.num_paginas,
        isbn: livroData.isbn,
        editora: livroData.editora
    };
    
    livros.push(novoLivro);
    return { error: false, data: novoLivro };
};

// Atualiza um livro existente
const updateLivro = (id, livroData) => {
    const index = livros.findIndex(livro => livro.id === id);
    if (index === -1) {
        return { error: true, message: 'Livro não encontrado' };
    }
    
    livros[index] = {
        id: id,
        titulo: livroData.titulo,
        num_paginas: livroData.num_paginas,
        isbn: livroData.isbn,
        editora: livroData.editora
    };
    
    return { error: false, data: livros[index] };
};

// Deleta um livro pelo ID
const deleteLivro = (id) => {
    const index = livros.findIndex(livro => livro.id === id);
    if (index === -1) {
        return { error: true, message: 'Livro não encontrado' };
    }
    
    livros.splice(index, 1);
    return { error: false, message: 'Livro removido com sucesso' };
};

module.exports = {
    getAllLivros,
    getLivroById,
    createLivro,
    updateLivro,
    deleteLivro
};
