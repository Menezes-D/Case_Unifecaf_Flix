/******************************************************************************************************
 * Objetivo: API para apresentar acervo de filmes da empresa de Streaming "Fecaf Flix"
 * Data: 26/05/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ********************************************************************************************************/

//Import das bibliotecas que criam a API
const express = require('express')
const cors = require('cors')

const filmeRoutes = require('./routes/filmeRoutes.js')

//Cria o app Express
const app = express()

// Configuração do CORS(Mais limpo do que o Passado em Aula)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))

// Permite o uso de JSON no corpo das requisições
app.use(express.json())

// Usa as rotas de filme
app.use(filmeRoutes)

// Inicia o servidor na porta 8080
app.listen(8080, () => {
  console.log('Servidor aguardando novas requisições na porta 8080...')
})