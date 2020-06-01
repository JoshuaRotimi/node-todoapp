const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Mongo DB server')
    }

    console.log('Connected to Mongo DB server');
    //
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert tod')
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Joshua',
        age: 22,
        location: 'Lagos'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err)
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();

});
