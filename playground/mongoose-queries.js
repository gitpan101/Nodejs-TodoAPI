const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ae8385c9e618036c81f1ad2';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo)
//         return console.log('ID not found');

//     console.log('Todo By Id', todo);
// }).catch((e)=> console.log(e));

User.findById('5ae6cb5804b6bd2eb467e7b9').then((user) => {
    if(!user)
        return console.log(('User not found'));

    console.log('User by ID', user);
}).catch((e) => console.log(e));
