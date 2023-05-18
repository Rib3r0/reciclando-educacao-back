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
        },
        {
            id : 2,
            nome : 'B',
            email : 'B@gmail.com',
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

    listOfUser = empresas.registros

    var account = listOfUser.find(account => account.id == id)
    if(account){
        return {accountExist : true, account : account}
    }else{
        return {accountExist : false, account : null}
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
    getEmpresas,
    getEmpressaById
}
