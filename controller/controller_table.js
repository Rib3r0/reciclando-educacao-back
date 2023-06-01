/******************************************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
 ******************************************************************************************/

var tableDAO = require('../model/DAO/tableDAO.js')


//criar tabelas
const getTable = async function(table){
    if(typeof table.start === 'string' && typeof table.end === 'string'){

        if(typeof table.type === undefined || typeof table.type === null || !isNaN(table.type)){

            let resultTable = await tableDAO.getTabela(table.start,table.end)
            return {status : 200 , tables : resultTable}

        }else{
            let resultTable = await tableDAO.getTabela(table.start,table.end,table.type)
            return {status : 200 , tables : resultTable}

        }

    }else{
        return {status: 415, message: 'Erro: Dados invalidos!'}
    }
}

module.exports = {
    getTable,
    //deleteTable,
   // updateTable
}