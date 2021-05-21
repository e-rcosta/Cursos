const express = require('express')

const server = express()

server.use(express.json());

//Query params = ?nome=NodeJs
//Route Params = /curso/2
//Request Body = { nome: 'NodeJs', tipo: 'Backend'}

//GRUD Create, Read, Update e Delete

const cursos = ['Node Js', 'JavaScript', 'React Native']

//Middlware Global
server.use((req, res, next) =>{
    console.log(`URL CHAMADA: ${req.url}`)
    return next()
})

function checkIndexCurso (req, res, next) {
    const curso = cursos[req.params.index]
    if(!curso) {
        return res.status(400).json({ erro: 'O curso não existe'})
    }

    //criou variável req.curso que recebe o index do curso
    req.curso = curso    

    return next()
}

function checkCurso (req, res, next) {
    if(!req.body.name){
        return res.status(400).json({ erro: "Nome do curso é obrigatório"})
    }

    return next()
}

server.get('/cursos', (req, res) =>{
    return res.json(cursos)
}) 

//Criando curso
server.post('/cursos', checkCurso, (req, res) =>{
    const { name } =  req.body

    cursos.push(name)

    return res.json(cursos)
})

//Alterando curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) =>{
    const { index } = req.params
    const { name } = req.body

    cursos[index] = name

    return res.json(cursos)

})

//Deletando um curso
server.delete('/cursos/:index', checkIndexCurso, (req, res) =>{
    const { index } = req.params

    cursos.splice(index, 1)

    return res.json({mensag: 'Curso deletado com sucesso!'})
})

//localhost:3000/curso
//Consulta um curso
server.get('/cursos/:index', checkIndexCurso, (req, res) =>{
   return res.json(req.curso) 
})

server.listen(3000)