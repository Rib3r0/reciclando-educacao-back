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

const criarMaterial = async function(createMaterialRequest){

    let sqlvalidar = `select * from tbl_material where tipo_material = "${createMaterialRequest.nome}"`;
    let accountvalidate = await prisma.$queryRawUnsafe(sqlvalidar);


    //fazer script
    if(accountvalidate[0] == undefined){
        let sql = `insert into tbl_material (toxico,tipo_material) values (${createMaterialRequest.toxico},'${createMaterialRequest.tipo}');`
        let account = await prisma.$queryRawUnsafe(sql);
        return true;
    }else{
        return false
    }
}

module.exports = {
    getMateriais,
    getMaterialByName,
    criarMaterial
}