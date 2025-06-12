/******************************************************************************************************
 * Objetivo: Responsável por gerir rotas de acesso da API
 * Data: 26/05/2024
 * Autor: Douglas Menezes
 * Versão: 1.0
 ********************************************************************************************************/

const express = require('express')
const cors = require('cors')
const controllerFilme = require('../controller/filme/controllerFilme.js');

const router = express.Router()

//Retorna todos os filmes no BD
router.get('/v1/streaming/filme', cors(), async function(req, res) {

    //Chama a função para retornar todos os filmes
    let dadosFilme = await controllerFilme.listarFilmes()
                      
    res.status(dadosFilme.status_code)
    res.json(dadosFilme)
    
})

//Retorna Filmes pelo nome e/ou sinopse (query params)
router.get('/v1/streaming/filme/filtro', cors(), async function(req, res) {
   
    //Recebem a variavel via params
    let nome = req.query.nome
    let sinopse = req.query.sinopse

    //Chama a função para buscar o filme pelo Nome e/ou sinopse
    let dadosFilme = await controllerFilme.filtrarFilme(nome, sinopse)

    res.status(dadosFilme.status_code)
    res.json(dadosFilme)
})


//Retorna Filme filtrando pelo ID
router.get('/v1/streaming/filme/:id', cors(), async function(req, res) {
    
    //Recebe a variavel via params
    let idFilme = req.params.id
    
    //Chama a função para retornar o Filme pelo ID
    let dadosFilme = await controllerFilme.buscarFilmeId(idFilme)

    res.status(dadosFilme.status_code)
    res.json(dadosFilme)
})


module.exports = router