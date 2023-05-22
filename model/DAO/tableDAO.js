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

//validar login
const getTabela = async function(start,end,type){

    if(type == undefined){
    /*
    let sql =   `select * from tbl_entrada_material 
                    where data < ${end},
                          data >${start}  `;

    let result = await prisma.$executeRawUnsafe(sql);

    if(result.length > 0){
        return result;
    }else{
        return false;
    }
    */
    }else{
    /*
    let sql =   `select * from tbl_entrada_material 
                    where data < ${end},
                          data > ${start},
                          material = ${type}  `;

    let result = await prisma.$executeRawUnsafe(sql);

    if(result.length > 0){
        return result;
    }else{
        return false;
    }
    */
    }




}




module.exports = {
    getTabela
}

