const express = require('express');
const cors = require('cors');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware de log - mostra todas as requisições no terminal
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    if (req.method === 'POST' || req.method === 'PUT') {
        console.log('   Body:', JSON.stringify(req.body));
    }
    next();
});

// Rotas
app.use('/livros', livrosRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.json({ 
        mensagem: 'API de Biblioteca Online',
        versao: '1.0.0',
        endpoints: {
            livros: '/livros'
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
