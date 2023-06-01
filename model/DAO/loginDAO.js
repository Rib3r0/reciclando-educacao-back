/******************************************************************************************
 * Objetivo: Realizar a interação do login com o Banco de Dados 
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

const { Prisma } = require('@prisma/client');

// Import da biblioteca do prisma client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client');
 
// Instancia da classe do PrismaClient
var prisma = new PrismaClient();

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
const validarLogin = async function(loginRequest){

     let sql = `select * from tbl_login where nome = "${loginRequest.nome}"`;
     let account = await prisma.$queryRawUnsafe(sql);
    listOfUser = login.users

    
    if(account[0] != undefined){
        if(account[0].senha == loginRequest.senha){
            return {accountValidate : true, account : account[0]}
        }else{
            return {accountValidate : false, account : null}
        } 
    }else{
        return {accountValidate : false, account : null}
    } 

}


//criar login
const criarLogin = async function(createLoginRequest){

    let sqlvalidar = `select * from tbl_login where nome = "${createLoginRequest.nome}"`;
    let accountvalidate = await prisma.$queryRawUnsafe(sqlvalidar);

    if(accountvalidate[0] == undefined){
        let sql = `insert into tbl_login(nome,senha,email) values ('${createLoginRequest.nome}', '${createLoginRequest.senha}', '${createLoginRequest.email}');`
        let account = await prisma.$queryRawUnsafe(sql);
        return true;
    }else{
        return false
    }
}

//deletar login
const deletarLogin = async function(id){

}

//atualizar login
const atualizarLogin = async function(login, newlogin){

}


module.exports = {
    validarLogin,
    criarLogin,
    deletarLogin,
    atualizarLogin
}

