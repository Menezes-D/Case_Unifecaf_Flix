/******************************************************************************************************************
 * Objetivo: Model responsável pelo CRUD de dados no BD
 * Data: 26/05/2025
 * Autor: Douglas Menezes
 * Versão: 1.0
 ******************************************************************************************************************/

//Import da biblioteca de manipulação do SQL
const {PrismaClient} = require('../../generated/prisma')
const prisma = new PrismaClient()


//Função para Retornar todos os filmes
const selectAllFilme = async function () {
    
    //Script para listar todos os Filmes
    const resultFilme = await prisma.$queryRaw `Select * from tbl_filme order by id desc`

    if(resultFilme.length > 0)
        return resultFilme
    else
        return false
}

//Função para Retornar Filme pelo ID
const selectByIdFilme = async function(id) {
    
    //Script para listar Filme por ID
    const resultFilme = await prisma.$queryRaw `select * from tbl_filme where id= ${id}`

    if(resultFilme.length > 0)
        return resultFilme
    else
        return false
}


//Função para Retornar Filme com base em parametros (nome,sinopse) RESOLVIDO*
const selectByQueryFilme = async function(nome, sinopse) {
    let sql = `select * from tbl_filme where `
    //Cria um array para armazenar as condições do filtro
    let conditions = []

    //Adiciona a condição se o nome for informado e for valido.
    if (nome && nome.trim() !== '') {
        conditions.push(`nome LIKE '%${nome}%'`)
    }
    //Faz a mesma verificação que a condicional anterior, porem relacionado a sinopse
    if (sinopse && sinopse.trim() !== '') {
        conditions.push(`sinopse LIKE '%${sinopse}%'`)
    }
    //Se nenhum filtro for passado, retorna false e evita passar novamente todos os filmes da tabela (Erro que ocorria*)
    if (conditions.length === 0) return false
    
    //Junta as condiçÕes com o OR, para que seja buscado os filmes que contenham o nome OU a sinopse informada
    sql += conditions.join(' OR ') 

    //Tenta executar a query no BD
    try {
        let resultFilme = await prisma.$queryRawUnsafe(sql)
        //Retorna os resultados se houver, senão retorna false
        return resultFilme.length > 0 ? resultFilme : false
    } catch (error) {
        //Exibe o errno console e retorna false em caso de falha
        console.error('Erro na query:', error)
        return false
    }
}


module.exports = {
    selectAllFilme,
    selectByIdFilme,
    selectByQueryFilme
}