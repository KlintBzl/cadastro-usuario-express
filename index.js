const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo! Meu primeiro projeto com Node.js e Express.');
});

app.get('/usuario', (req, res) => {
    
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
