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

    let sql = `select sum(tbl_chegada_material.quantidade) as quantidade, tbl_material.tipo_material from tbl_chegada_material, tbl_material
	where tbl_chegada_material.id_material = tbl_material.id
    GROUP BY tbl_material.tipo_material
    ;`;
    let materiais = await prisma.$queryRawUnsafe(sql);
    if(materiais.length == 0){
        sql = `select * from tbl_material where tipo_material =  '${createEmpresaRequest.material}'`
        material = await prisma.$queryRawUnsafe(sql);
    }

    return materiais
}

const getMaterialByName = async function(name){

    let sql = `select sum(tbl_chegada_material.quantidade) as quantidade, tbl_material.tipo_material from tbl_chegada_material, tbl_material
	where tbl_chegada_material.id_material = tbl_material.id
    and tbl_material.tipo_material = "${name}"
    GROUP BY tbl_material.tipo_material
    ;`;
    let table = await prisma.$queryRawUnsafe(sql);
    console.log(table);

    if(table){
        return table
    }else{
        return false
    } 

}

const criarMaterial = async function(createMaterialRequest){
    console.log(createMaterialRequest);

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