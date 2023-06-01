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
const validarLogin = async function(loginRequest){

    // let sql = `select * from tbl_account where name = ${loginRequest.nome}`;
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
const criarLogin = async function(createLoginRequest){
    // let sql = `insert into tbl_aluno (nome, cpf, rg, data_nascimento, email)values (createLoginRequest.nome, createLoginRequest.senha, '22.700.123-7', '2000-05-20', 'jose@gmail.com');`;
    // let account = await prisma.$queryRawUnsafe(sql);

    if(result){
        return true;
    }else{
        return false;
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

