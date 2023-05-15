/******************************************************************************************
 * Objetivo: Realizar a interação do login com o Banco de Dados 
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

//const { Prisma } = require('@prisma/client');

// Import da biblioteca do prisma client (responsável por manipular dados no BD)
//var { PrismaClient } = require('@prisma/client');
 
// Instancia da classe do PrismaClient
//var prisma = new PrismaClient();

var empresas = {
    registros : [
        {
            id : 1,
            nome : 'A',
            email : 'A@gmail.com',
            senha : '1234'
        },
        {
            id : 2,
            nome : 'B',
            email : 'B@gmail.com',
            senha : '5678'
        }
    ]
}

//validar login
const getEmpresas = async function(){

    // let sql = `select * from tbl_companies`;
    // let empressas = await prisma.$queryRawUnsafe(sql);

    listOfCompanies = empresas.registros
    return listOfCompanies
}

const getEmpressaById = async function(id){

    // let sql = `select * from tbl_companies where id = ${id}`;
    // let account = await prisma.$queryRawUnsafe(sql);

    listOfUser = login.users

    var account = listOfUser.find(account => account.nome == loginRequest.nome)
    if(account){
        if(account.senha == loginRequest.senha){
            return {accountValidate : true, account : account}
        }else{
            return {accountValidate : false, account : null}
        } 
    }else{
        return {accountValidate : false, account : null}
    } 

}

//criar login
const criarEmpressa = async function(createLoginRequest){

}

//deletar login
const deletarEmpressa = async function(id){

}

//atualizar login
const atualizarEmpressa = async function(login, newlogin){

}


module.exports = {
    getEmpresas
}

