const express = require ('express')
// quero usar esse módulo express a partir de uma variável 'express' aí não precisa ficar repetindo o comando toda hora.
const app = express()
// ao usar app vou me referir ao express

//Primeira Rota GET
app.get('/', function(req,res){ //depois da / começa a surgir as rotas 
//req = request . res= response (vai enviar uma resposta ao usuário)
    res.send ('Bem vindo(a) ao meu site') /*envie uma resposta */ 
})

app.get('/watch', function(req,res){
    res.send ('Bem vindo(a) ao meu siteeeeeee')
})
// o que vem depois da interrogação é um parâmetro

app.listen(3651, function(){ // esse número indica em qual porta nossa API vai entrar
    console.log("API TA RODANDO EBAAAAAAA...")
})

//CONFIGURAR UMA ROTA QUE RECEBA UM PARÂMETRO