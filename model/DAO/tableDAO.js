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

//validar login
const getTabela = async function(start,end,type){

    if(type == undefined){
        console.log(start);
        console.log(end);
        let sql =   `select tbl_chegada_material.*, tbl_material.tipo_material from tbl_chegada_material, tbl_material where  data_chegada <= '${end}' and data_chegada >= '${start}' and  tbl_chegada_material.id_material = tbl_material.id `;

        let result = await prisma.$queryRawUnsafe(sql);

        if(result.length > 0){
            return result;
        }else{
            return false;
        }

    }else{

        let sql = `select * from tbl_material where tipo_material =  '${type}'`
        let material = await prisma.$queryRawUnsafe(sql);

        sql =   `select * from tbl_chegada_material 
                        where   data_chegada < '${end}' and
                                data_chegada > '${start}' and
                                id_material = ${material[0].id}  `;

        let result = await prisma.$queryRawUnsafe(sql);

        if(result.length > 0){
            return result;
        }else{
            return false;
        }
    
    }




}

const postTabela = async function(data){

    let sql = `select * from tbl_material where tipo_material =  '${data.material}'`
    let material = await prisma.$queryRawUnsafe(sql);
    console.log(material.length);

    if(material.length == 0){
        console.log( await criarMaterial({ "toxico" : false,"tipo" : data.material}));
        sql = `select * from tbl_material where tipo_material =  '${data.material}'`
        material = await prisma.$queryRawUnsafe(sql);
    }
    

    sql =  `insert into tbl_chegada_material (quantidade,data_chegada,qual_doador,id_material,ponto_de_coleta) 
                values (${data.quantidade},CURDATE(),'${data.nome}',${material[0].id},'${data.local}');`;

        
    let result = await prisma.$queryRawUnsafe(sql);
    console.log(result);

    if(result){
        return true;
    }else{
        return false;
    }

    
}


module.exports = {
    getTabela,
    postTabela
}

