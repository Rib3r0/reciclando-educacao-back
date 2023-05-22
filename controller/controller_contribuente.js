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
    return {status : 200 , materials : contribuenteRequest}

}

const getContribuenteById = async function(id){

    let contribuenteRequest = await contribuenteDAO.getContribuenteById(id)
    return {status : 200 , materials : contribuenteRequest}

}


module.exports = {
    getContribuentes,
    getContribuenteById
}