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

    if(typeof name == 'string'){
        let materialRequest = await materialDAO.getMaterialByName(name)
        return {status : 200 , materials : materialRequest}
    }else{
        return {status: 415, message: 'Todos os dados do cadastro precisam ser do tipo certo.'}
    }

    

}

const registerMaterial = async function(cadastro){
    
    if(typeof cadastro.toxico === 'boolean' && typeof cadastro.tipo === 'string'){

        let createRequest = await materialDAO.criarMaterial(cadastro)
        return {status : 200 , materialValidate : createRequest}
    }else{
        return {status: 415, message: 'Todos os dados do cadastro precisam ser do tipo certo.'}
    }

}


module.exports = {
    getMaterials,
    getMaterialByName,
    registerMaterial
}