/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var loginDAO = require('../model/DAO/loginDAO.js')

//realizar login
const validateLogin = async function(login){

    if(typeof login.nome === 'string' && typeof login.senha === 'string'){
        let loginRequest = await loginDAO.validarLogin(login)
        return {status : 200 , accountValidate : loginRequest.accountValidate, account : loginRequest.account}
    }else{
        return {status: 415, message: 'Todos os dados do login precisam ser em String.'}
    }


}

//criar login
const createLogin = async function(login){

    if(typeof login.nome === 'string' && typeof login.senha === 'string' && typeof login.email === 'string'){
        let createRequest = await loginDAO.criarLogin(login)
        return {status : 200 , accountValidate : createRequest}
    }else{
        return {status: 415, message: 'Todos os dados do login precisam ser em String.'}
    }
}

//deletar login
const deleteLogin = async function(id){

}

//atualizar login
const updateLogin = async function(login,newLogin){
    
}

module.exports = {
    validateLogin,
    createLogin,
    deleteLogin,
    updateLogin
}