const mogoose = require('mogoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type:String
    },
    date: {
        type:Date,
        default: Date.now
    }
})