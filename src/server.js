//Servidor
const express = require('express')
const server = express()    
const { pageLanding,pageStudy,pageGiveClasses,saveClasses } = require('./pages')

//configurar nunjucks(Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,

})

//Inicio e configuração do servidor
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)
