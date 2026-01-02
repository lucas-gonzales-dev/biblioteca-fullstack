const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

// GET /livros - Retorna todos os livros
router.get('/', livrosController.getAllLivros);

// GET /livros/:id - Retorna um livro específico pelo ID
router.get('/:id', livrosController.getLivroById);

// POST /livros - Cria um novo livro
router.post('/', livrosController.createLivro);

// PUT /livros/:id - Atualiza um livro existente
router.put('/:id', livrosController.updateLivro);

// DELETE /livros/:id - Remove um livro
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;
