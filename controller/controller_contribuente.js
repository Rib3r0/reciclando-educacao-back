/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var contribuenteDAO = require('../model/DAO/contribuenteDAO')

//realizar login
const getContribuentes = async function(){

    let contribuenteRequest = await contribuenteDAO.getContribuentes()
    return {status : 200 , contribuentes : contribuenteRequest}

}

const getContribuenteById = async function(id){

    let contribuenteRequest = await contribuenteDAO.getContribuenteById(id)
    return {status : 200 , contribuentes : contribuenteRequest}

}

const createContribuente = async function(cadastro){

    console.log()

    if(typeof cadastro.nome === 'string' && typeof cadastro.cpf === 'string' && typeof cadastro.email === 'string' && typeof cadastro.telefone === 'string'){
        let createRequest = await contribuenteDAO.criarContribuente(cadastro)
        return {status : 200 , accountValidate : createRequest}
    }else{
        return {status: 415, message: 'Todos os dados do cadastro precisam ser em String.'}
    }
}


module.exports = {
    getContribuentes,
    getContribuenteById,
    createContribuente
}