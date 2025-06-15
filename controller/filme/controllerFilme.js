/******************************************************************************************************************
 * Objetivo: Controller responsável por Listar, Buscar e Filtrar os Filmes
 * Data: 26/05/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ******************************************************************************************************************/

//Import do arquivo DAO
const filmeDAO = require('../../model/DAO/filme.js')
//Import do arquivo de messagens de erro/acerto
const MESSAGE = require('../../message/config.js')

//Retorna todos os Filmes
const listarFilmes = async function(){
    
    let filmeJSON = {}

    let resultFilme = await filmeDAO.selectAllFilme()

    if(resultFilme){
        //Cria um objeto JSON com caracteristicas de retorno
        filmeJSON.status = true
        filmeJSON.status_code = 200
        filmeJSON.movies = resultFilme

        return filmeJSON
    }else
        return MESSAGE.ERROR_NOT_FOUND //400
}

//Retorna o Filme filtrando pelo ID
const buscarFilmeId = async function(id) {
    
    // Verifica se o ID é inválido (vazio, nulo, indefinido ou não numérico)
    if(id.trim() === '' || id == null || id == undefined || isNaN(id)){
        return MESSAGE.ERROR_REQUIRED_FIELDS 
    }else{

        let filmeJSON = {}

        let resultFilme = await filmeDAO.selectByIdFilme(id)

        if(resultFilme){
            filmeJSON.status = true
            filmeJSON.status_code = 200
            filmeJSON.movie = resultFilme

            return filmeJSON
        }else
            return MESSAGE.ERROR_NOT_FOUND  
    }
}

//Retorna o Filme com base no parametros (nome, sinopse)
 const filtrarFilme = async function(nome = '', sinopse = '') {
    //console.log('➡️ Requisição recebida com:', { nome, sinopse })

    // Verifica se ambos os campos estão vazios ou contêm apenas espaços
    if ((!nome || nome.trim() === '') && (!sinopse || sinopse.trim() === '')) {
        return MESSAGE.ERROR_REQUIRED_FIELDS
    }

    const dadosFilme = await filmeDAO.selectByQueryFilme(nome, sinopse)

    if (dadosFilme) {
        return {
            status: true,
            status_code: 200,
            count: dadosFilme.length,
            movies: dadosFilme
        }
    } else {
        return MESSAGE.ERROR_NOT_FOUND
    }
}


module.exports = {
    listarFilmes,
    buscarFilmeId,
    filtrarFilme
}