//metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: criar uma sessao
show: quando queremos listar uma UNICA sessao
destroy: quando queremos deletar uma sessao 
*/

import User from '../models/User'

class SessionController {
   
    //fazer login
    //como tivemos que usar o awai preciso dizer que essa função é assincrona 
    async store(req, res){
        //const email = req.body.email;
        //faço a desconstrução onde do body eu pego apenas o email, usando o comando abaixo
        const { email } = req.body

        //mandando para o banco de dados, essa função é assincrona, então precisamos usar o comando 
        //await para esperar a conclusão e passar para o proximo comando. 
        
        //Verificando na base se esse usuário já existe
        let user = await User.findOne( { email })

        //verifica se o usuário não existe e solicita a criação 
        if(!user){
            user = await User.create({ email });
        } 
        
        return res.json(user);
    }
}

export default new SessionController();