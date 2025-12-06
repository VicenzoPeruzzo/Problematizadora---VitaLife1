const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração básica
app.use(express.json()); // Para a API entender JSON
app.use(cors());         // Para liberar acesso externo

// --- SUAS ROTAS AQUI ---

// Rota de Teste (Para saber se está vivo)
app.get('/', (req, res) => {
    res.json({ mensagem: "A API VitaLife está rodando!" });
});

// Exemplo: Simulando uma resposta da parte de Médicos (Doctor)
// Futuramente, você vai conectar seus arquivos reais aqui.
app.get('/doctors', (req, res) => {
    res.json([
        { id: 1, nome: "Dr. Exemplo", especialidade: "Cardiologia" },
        { id: 2, nome: "Dra. Teste", especialidade: "Dermatologia" }
    ]);
});

// -----------------------

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});