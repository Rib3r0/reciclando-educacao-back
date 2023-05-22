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

var materiais = {
    registros : [
        {
            id : 1,
            nome : 'Fernando',
            email : 'Fernando@gmail.com',
            endereco : 'Rua ABC, n28',
        },
        {
            id : 2,
            nome : 'Amanda',
            email : 'Amanda@gmail.com',
            endereco : 'Rua DEF, n02',
        }
    ]
}

//validar login
const getMateriais = async function(){

    // let sql = `select * from tbl_companies`;
    // let empressas = await prisma.$queryRawUnsafe(sql);

    listOfMateriais = materiais.registros
    return listOfMateriais
}

const getMaterialByName = async function(name){

    // let sql = `select * from tbl_companies where id = ${id}`;
    // let account = await prisma.$queryRawUnsafe(sql);

    listOfMateriais = materiais.registros

    var account = listOfMateriais.find(account => account.name == name)
    if(account){
        return {accountExist : true, account : account}
    }else{
        return {accountExist : false, account : null}
    } 

}

module.exports = {
    getMateriais,
    getMaterialByName
}