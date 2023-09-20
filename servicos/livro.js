const fs = require('fs')
//VOU PEGAR TODOS OS LIVROS
function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

//VOU PEGAR APENAS UM LIVRO
function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id == id)
    return livroFiltrado;
}

//VAMOS PODER ADICIONAR LIVROS
function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros,livroNovo]
    fs.writeFileSync('livros.json',JSON.stringify(novaListaDeLivros))

}

function modificaLivro(modificacao,id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado],...modificacao }
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json',JSON.stringify(livrosAtuais))
}

//VAMOS PODER DELETAR UM LIVRO

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivroPorId,
}