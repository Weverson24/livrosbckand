const { getTodosLivros,getLivroPorId,insereLivro, modificaLivro,deletarLivroPorId } = require('../servicos/livro');

//FUNCÇAO QUE VAI MOSTRAR TODOS OS LIVROS
function getLivros(req, res){
    try {
      const  livros = getTodosLivros();
      res.send(livros);
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
}

//FUNÇAO QUE VAI PUXAR O LIVRO PELO ID
function getLivro(req, res){
  try {
    const id = req.params.id
    if(id && Number(id)){
      const  livro = getLivroPorId(id);
      res.send(livro);
    }else{
      res.status(422)
      res.send("Id invalido")
    }
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
//FUNÇÃO QUE VAI ADICIONAR MAIS LIVROS
function postLivro(req,res){
  try{
    const livroNovo = req.body
    if(req.body.nome){
      insereLivro(livroNovo)
      res.status(201)
      res.send("livro inserisdo com sucesso")
    }else{
      res.status(422)
      res.send("O campo nome precosa ser preenchido")
    }
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function patchLivro(req,res){
  try{
    const id = req.params.id
    const body = req.body

    if(id && Number(id)){
      modificaLivro(body,id)
      res.send("Item modificado com sucesso")
    }else{
      res.status(422)
      res.send("Id invalido")
    }


  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro(req, res) {
  try {
      const id = req.params.id
      if(id && Number(id)){
        deletarLivroPorId(id)
        res.send("livro deletado com sucesso")
      }else{
        res.status(422)
        res.send("Id invalido")
      }
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro,
}