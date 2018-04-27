// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }  

    console.log('Connected to mongodb server');

    var todoDb = db.db('TodoApp');                  //necessary step for mongodb ver >= 3.0

    // todoDb.collection('Todos').find({
    //     _id: new ObjectID('5ae1d2f7dfc4ea3150090dfd')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    todoDb.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Count: ${count}`);        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});