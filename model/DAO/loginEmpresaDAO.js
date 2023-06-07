/******************************************************************************************
 * Objetivo: Realizar a interação do login com o Banco de Dados 
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

//const { Prisma } = require('@prisma/client');

// Import da biblioteca do prisma client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client');
const { criarMaterial } = require('./materialDAO');
 
// Instancia da classe do PrismaClient
var prisma = new PrismaClient();

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

    let sql = `select * from tbl_empresa`;
    let empresas = await prisma.$queryRawUnsafe(sql);

    listOfCompanies = empresas.registros
    return empresas
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
const criarEmpressa = async function(createEmpresaRequest){

    
    let sqlvalidar = `select * from tbl_empresa where nome = "${createEmpresaRequest.nome}"`;
    let accountvalidate = await prisma.$queryRawUnsafe(sqlvalidar);

    if(accountvalidate[0] == undefined){
        sql = `select * from tbl_material where tipo_material =  '${createEmpresaRequest.material}'`
        let material = await prisma.$queryRawUnsafe(sql);


        if(material.length == 0){
            console.log( await criarMaterial({ "toxico" : false,"tipo" : createEmpresaRequest.material}));
            sql = `select * from tbl_material where tipo_material =  '${createEmpresaRequest.material}'`
            material = await prisma.$queryRawUnsafe(sql);
        }
            

      //registro
        sql = `insert into tbl_empresa (nome,cnpj,email,id_telefone,id_endereco,id_material,id_periodo) 
        values ('${createEmpresaRequest.nome}', '${createEmpresaRequest.cnpj}', '${createEmpresaRequest.email}', '${createEmpresaRequest.telefone}','${createEmpresaRequest.endereco}',${material[0].id},'${createEmpresaRequest.periodo}');`
        let account = await prisma.$queryRawUnsafe(sql);
        return true;
    }else{
        return false
    }
}

//deletar login
const deletarEmpressa = async function(id){

}

//atualizar login
const atualizarEmpressa = async function(login, newlogin){

}


module.exports = {
    getEmpresas,
    getEmpressaById,
    criarEmpressa
}

