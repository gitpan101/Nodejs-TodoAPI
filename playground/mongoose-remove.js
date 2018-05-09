const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove({_id: '5aedad02e06c2c1714994df4'})

Todo.findByIdAndRemove('5aedad02e06c2c1714994df4').then((todo) => {
    console.log(todo);
});