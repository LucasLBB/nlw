const express = require ('express')
const server = express() 

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, sucess } = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configurando arquivos estaticos(css, scripts e imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/sucess", sucess)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

// npm run dev para rodar o nodemon


