// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongodb server');
    }  

    console.log('Connected to mongodb server');

    var todoDb = db.db('TodoApp');                  //necessary step for mongodb ver >= 3.0

    //deletemany
    // todoDb.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    todoDb.collection('Users').deleteMany({name: 'Ashutosh Pandey'}).then((result)=>{
        console.log(result);
    });

    //deleteOne
    // todoDb.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    //findOneandDelete
    // todoDb.collection('Todos').findOneAndDelete({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    // todoDb.collection('Users').findOneAndDelete({_id: new ObjectID('5ae1d44c8325182370963da8')}).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});