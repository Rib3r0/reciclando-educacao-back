/******************************************************************************************
 * Objetivo: Arquivo responsável pelas váriaveis, constantes e funções globais do projeto
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 28/04/2023
 * Versão: 1.0
 ******************************************************************************************/

/*************************************Constantes de ERROS**********************************/
const ERRO_REQUIRED_DATA = {status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'};

const ERRO_REQUIRED_ID = {status: 400, message: 'O atributo ID é obrigatório na requisição.'};

const ERROR_NOT_FOUND = {status: 404, message: 'Nenhum registro encontrado na reguisilção'};

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de mídia Content-typeda solicitação não é compatível com o servidor, [application/json].'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Erro interno no servidor de Bando de Dados.'};





/*************************************Constantes de SUCESSO**********************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso.'};

const UPDATED_ITEM = {status: 200, message: 'Registro Atualizado com sucesso.'};

const DELETED_ITEM = {status: 200, message: 'Registro Deletado com sucesso.'};

module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_REQUIRED_ID,
    ERROR_NOT_FOUND,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER,
    UPDATED_ITEM,
    DELETED_ITEM,
    CREATED_ITEM
}