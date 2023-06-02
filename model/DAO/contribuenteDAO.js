/******************************************************************************************
 * Objetivo: Realizar a interação do login com o Banco de Dados 
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

const { createLogin: createContribuenteRequest } = require("../../controller/controller_login")

const { Prisma } = require('@prisma/client');

// Import da biblioteca do prisma client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client');
 
// Instancia da classe do PrismaClient
var prisma = new PrismaClient();

var contribuentes = {
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
const getContribuentes = async function(){

    let sql = `select * from tbl_contribuente`;
    let contribuentes = await prisma.$queryRawUnsafe(sql);
    return contribuentes
}

const getContribuenteById = async function(id){

    // let sql = `select * from tbl_companies where id = ${id}`;
    // let account = await prisma.$queryRawUnsafe(sql);

    listOfContribuentes = contribuentes.registros

    var account = listOfContribuentes.find(account => account.id == id)
    if(account){
        return {accountExist : true, account : account}
    }else{
        return {accountExist : false, account : null}
    } 

}
const criarContribuente = async function(createContribuenteRequest){
    let sqlvalidar = `select * from tbl_contribuente where cpf = "${createContribuenteRequest.cpf}"`;
    let accountvalidate = await prisma.$queryRawUnsafe(sqlvalidar);

    if(accountvalidate[0] == undefined){
      //registro
        sql = `insert into tbl_contribuente (nome,cpf,email,id_telefone,id_endereco) values ('${createContribuenteRequest.nome}', '${createContribuenteRequest.cpf}', '${createContribuenteRequest.email}', '${createContribuenteRequest.telefone}','${createContribuenteRequest.endereco}');`
        let account = await prisma.$queryRawUnsafe(sql);
        return true;
    }else{
        return false
    }
}


module.exports = {
    getContribuentes,
    getContribuenteById,
    criarContribuente
}

