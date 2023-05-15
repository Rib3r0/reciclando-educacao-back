/******************************************************************************************
 * Objetivo: Criar uma API para manipulação de dados do site Reciclando Educação
 * Autor: Eduardo Ribeiro Pimenta
 * Data: 15/05/2023
 * Versão: 1.0
******************************************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET');

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
})

//end points
const bodyJSON = bodyParser.json()

const controllerLogin = require('./controller/controller_login.js')


app.get('/v1/reciclando-educacao/login',cors(),bodyJSON, async function (request, response){

    let contentType = request.headers['content-type']

    let dadosBody = request.body;

    let resultLogin = await controllerLogin.validateLogin(dadosBody);

    response.status(resultLogin.status);
    response.json(resultLogin)
})

const controllerEmpresas = require('./controller/controller_empresas')

app.get('/v1/reciclando-educacao/empresas',cors(), async function (request, response){

    let result = await controllerEmpresas.getCompanies();

    response.status(result.status);
    response.json(result)
})



app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080!')
 })