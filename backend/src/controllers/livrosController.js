const livrosModel = require('../models/livrosModel');

// GET /livros - Retorna todos os livros
const getAllLivros = (req, res) => {
    const livros = livrosModel.getAllLivros();
    res.status(200).json(livros);
};

// GET /livros/:id - Retorna um livro específico pelo ID
const getLivroById = (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livrosModel.getLivroById(id);
    
    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    
    res.status(200).json(livro);
};

// POST /livros - Cria um novo livro
const createLivro = (req, res) => {
    const { id, titulo, num_paginas, isbn, editora } = req.body;
    
    // Validação dos campos obrigatórios
    if (!id || !titulo || !num_paginas || !isbn || !editora) {
        return res.status(400).json('Todos os campos são obrigatórios: id, titulo, num_paginas, isbn, editora');
    }
    
    const resultado = livrosModel.createLivro({
        id: parseInt(id),
        titulo,
        num_paginas: parseInt(num_paginas),
        isbn,
        editora
    });
    
    if (resultado.error) {
        return res.status(400).json(resultado.message);
    }
    
    res.status(201).json('Livro cadastrado com sucesso!');
};

// PUT /livros/:id - Atualiza um livro existente
const updateLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, num_paginas, isbn, editora } = req.body;
    
    // Validação dos campos obrigatórios
    if (!titulo || !num_paginas || !isbn || !editora) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios: titulo, num_paginas, isbn, editora' });
    }
    
    const resultado = livrosModel.updateLivro(id, {
        titulo,
        num_paginas: parseInt(num_paginas),
        isbn,
        editora
    });
    
    if (resultado.error) {
        return res.status(404).json({ mensagem: resultado.message });
    }
    
    res.status(200).json({ mensagem: 'Livro atualizado com sucesso!' });
};

// DELETE /livros/:id - Remove um livro
const deleteLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = livrosModel.deleteLivro(id);
    
    if (resultado.error) {
        return res.status(404).json({ mensagem: resultado.message });
    }
    
    res.status(200).json({ mensagem: 'Livro removido com sucesso!' });
};

module.exports = {
    getAllLivros,
    getLivroById,
    createLivro,
    updateLivro,
    deleteLivro
};
