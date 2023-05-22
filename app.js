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

const message = require('./controller/model/message.js')

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
const controllerEmpresas = require('./controller/controller_empresas.js')
const controllerTable = require('./controller/controller_table.js')
const controllerMaterial = require('./controller/controller_material.js')
const controllerContribuentes = require('./controller/controller_contribuente.js')

//valida login
app.get('/v1/reciclando-educacao/login',cors(),bodyJSON, async function (request, response){

    let contentType = request.headers['content-type']
    if(String(contentType).toLowerCase() == 'application/json'){
        let dadosBody = request.body;

        let resultLogin = await controllerLogin.validateLogin(dadosBody);
    
        response.status(resultLogin.status);
        response.json(resultLogin)
    }else{
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})
//cria login
app.post('/v1/reciclando-educacao/cadastro',cors(),bodyJSON, async function (request, response){

    let contentType = request.headers['content-type']
    if(String(contentType).toLowerCase() == 'application/json'){
        let dadosBody = request.body;

        let resultLogin = await controllerLogin.createLogin(dadosBody);
    
        response.status(resultLogin.status);
        response.json(resultLogin)

    }else{
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})

//retorna todas as empresas
app.get('/v1/reciclando-educacao/empresas',cors(), async function (request, response){

    let result = await controllerEmpresas.getCompanies();

    response.status(result.status);
    response.json(result)
})
//retorna um empresa especifica pelo id
app.get('/v1/reciclando-educacao/empresas/:id',cors(), async function (request, response){

    let id = request.params.id

    let result = await controllerEmpresas.getCompanieById(id);

    response.status(result.status);
    response.json(result)
})

//retona dados para tebela
app.get('/v1/reciclando-educacao/table/',cors(),bodyJSON, async function (request, response){

    let contentType = request.headers['content-type']

    if(String(contentType).toLowerCase() == 'application/json'){

        let body = request.body

        let resultTable = await controllerTable.getTable(body)

        response.status(resultTable.status);
        response.json(resultTable)

    }else{
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})

app.get('/v1/reciclando-educacao/materials/',cors(), async function (request, response){

    let resultMaterial = await controllerMaterial.getMaterials()
    if(resultMaterial){
        response.status(resultMaterial.status);
        response.json(resultMaterial)

    }else{
        response.status(message.ERROR_INTERNAL_SERVER.status);
        response.json(message.ERROR_INTERNAL_SERVER)
    }

})
app.get('/v1/reciclando-educacao/materials/:material',cors(), async function (request, response){

    let material = request.params.material

    if(material){
        let resultMaterial = await controllerMaterial.getMaterialByName(material)
        response.status(resultMaterial.status);
        response.json(resultMaterial)

    }else{
        response.status(message.ERROR_INTERNAL_SERVER.status);
        response.json(message.ERROR_INTERNAL_SERVER)
    }

})

app.get('/v1/reciclando-educacao/contribuentes/',cors(), async function (request, response){

    let resultContribuentes = await controllerContribuentes.getContribuentes()
    if(resultContribuentes){
        response.status(resultContribuentes.status);
        response.json(resultContribuentes)

    }else{
        response.status(message.ERROR_INTERNAL_SERVER.status);
        response.json(message.ERROR_INTERNAL_SERVER)
    }

})
app.get('/v1/reciclando-educacao/contribuentes/:id',cors(), async function (request, response){

    let id = request.params.id

    if(id){
        let resultMaterial = await controllerContribuentes.getContribuenteById(id)
        response.status(resultMaterial.status);
        response.json(resultMaterial)

    }else{
        response.status(message.ERROR_INTERNAL_SERVER.status);
        response.json(message.ERROR_INTERNAL_SERVER)
    }

})



app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080!')
 })