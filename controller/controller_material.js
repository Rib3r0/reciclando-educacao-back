/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var materialDAO = require('../model/DAO/materialDAO.js')

//realizar login
const getMaterials = async function(){

    let materialRquest = await materialDAO.getMateriais()
    return {status : 200 , materials : materialRquest}

}

const getMaterialByName = async function(name){

    let materialRquest = await materialDAO.getMaterialByName(name)
    return {status : 200 , materials : materialRquest}

}


module.exports = {
    getMaterials,
    getMaterialByName
}