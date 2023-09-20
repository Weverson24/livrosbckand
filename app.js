const express = require('express');
const rotaLivros = require("./rotas/livro")
const app = express();
//app agora está usando o express.json 
app.use(express.json())




app.use('/livros',rotaLivros)


// a minha porta é essa:
const PORT = 8000
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta https//localhost:${PORT}`)
})
//Aqui ira escutar a minha porta..
