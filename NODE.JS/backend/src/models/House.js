import {Schema, model} from 'mongoose'

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    //informa qual foi o ususário que cadastro a casa, pegando o Id do usuário
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default model('House', HouseSchema)