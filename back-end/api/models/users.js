var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        trim:true

    },

    //updatedAt: Date
});

mongoose.model('users', UsersSchema);