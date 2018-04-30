var mongoose = require('mongoose');

var User = mongoose.model('users', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {User};