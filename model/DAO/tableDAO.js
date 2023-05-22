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

var login = {
    users : [
        {
            id : 1,
            nome : 'Eduardo',
            email : 'Eduardo@gmail.com',
            senha : '1234'
        },
        {
            id : 2,
            nome : 'Ana',
            email : 'Ana@gmail.com',
            senha : '5678'
        }
    ]
}

//validar login
const getTabela = async function(star,end,type){

    /*
    let sql = `select * from tbl_account where name = ${loginRequest.nome}`;

    */

    if(type == undefined){
    /*
        let sql = `select  from tbl_account 
            where name = ${loginRequest.nome}`;

    */
    }else{
        
    }




}



module.exports = {
    getTabela
}

