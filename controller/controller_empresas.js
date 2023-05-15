/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var empresasDAO = require('../model/DAO/loginEmpresaDAO.js')

//realizar login
const getCompanies = async function(){

    let request = await empresasDAO.getEmpresas()

    if(request){
        return {status : 200 , Companies : request}
    }else{
        return {status: 500, message: 'Erro interno no servidor'}
    }


}

//criar login
const createCompanie = async function(login){

}

//deletar login
const deleteCompanie = async function(id){

}

//atualizar login
const updateCompanie = async function(login,newLogin){

}

module.exports = {
    getCompanies,
    createCompanie,
    deleteCompanie,
    updateCompanie
}