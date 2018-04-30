// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }  

    console.log('Connected to mongodb server');

    var todoDb = db.db('TodoApp');                  //necessary step for mongodb ver >= 3.0

    todoDb.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    todoDb.collection('Users').insertOne({
        name: 'Ashutosh Pandey',
        age: 23,
        location: 'lucknow'
    }, (err, result) => {
        if(err){
            console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});