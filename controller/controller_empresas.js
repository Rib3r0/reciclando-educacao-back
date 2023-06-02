/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var empresasDAO = require('../model/DAO/loginEmpresaDAO.js')

//retorna todas as empressas
const getCompanies = async function(){

    let request = await empresasDAO.getEmpresas()

    if(request){
        return {status : 200 , Companies : request}
    }else{
        return {status: 500, message: 'Erro interno no servidor'}
    }


}

//retorna empresa pelo id
const getCompanieById = async function(id){

    if(!isNaN(id)){
        let request = await empresasDAO.getEmpressaById(id)
        return {status : 200 , accountExist : request.accountExist, account : request.account}
    }else{
        return {status: 415, message: 'id informado precisa ser um Int'}
    }

}
getCompanieById('pedra')

//criar login
const createCompanie = async function(cadastro){

    if(typeof cadastro.nome === 'string' && typeof cadastro.cnpj === 'string' && typeof cadastro.email === 'string'){
        let createRequest = await empresasDAO.criarEmpressa(cadastro)
        return {status : 200 , accountValidate : createRequest}
    }else{
        return {status: 415, message: 'Todos os dados do cadastro precisam ser em String.'}
    }
}

//deletar login
const deleteCompanie = async function(id){

}

//atualizar login
const updateCompanie = async function(login,newLogin){

}

module.exports = {
    getCompanies,
    getCompanieById,
    createCompanie,
    deleteCompanie,
    updateCompanie
}