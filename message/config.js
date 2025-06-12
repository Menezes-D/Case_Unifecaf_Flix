/******************************************************************************************************************
 * Objetivo: Arquivo de configuração de mensagens de erros ou acertos
 * Data: 26/05/2024
 * Autor: Douglas Menezes
 * Versão: 1.0
 ******************************************************************************************************************/

const ERROR_NOT_FOUND         =  {status: false, status_code: 404, message: 'Nenhum item foi encontrado!!!'}
const ERROR_REQUIRED_FIELDS   =  {status: false, status_code: 400, message: 'Não foi possivel processar a requisição pois os dados encaminhados não são validos ou não foram encaminhados!!!'}
const ERROR_TESTE             =  {status: false, status_code: 402, message: 'teste teste teste'}


module.exports = {
    ERROR_NOT_FOUND,
    ERROR_TESTE,
    ERROR_REQUIRED_FIELDS
}