import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App{
    constructor(){
        this.server = express()

        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.qxcqr.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        this.middlewares()
        this.routes()
    }

    middlewares(){
        //passando para o servidor que iremos trabalhar com formato json
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server