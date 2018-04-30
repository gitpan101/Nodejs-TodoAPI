// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }  

    console.log('Connected to mongodb server');

    var todoDb = db.db('TodoApp');                  //necessary step for mongodb ver >= 3.0

    //Set operator
    // todoDb.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ae1d2f7dfc4ea3150090dfd')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //inc operator
    todoDb.collection('Users').findOneAndUpdate({
        name: 'Radha Pandey'
    },{
        $inc: {
            age: 25
        }
    },{
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
    });

    //db.close();
});