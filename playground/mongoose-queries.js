const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5ed679d47fa257e055aa0000';

const userId = '5ed63db8724a6de24ea9cb6a';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not Valid')
// }

// Todo.find({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo._doc)
// });
//
// Todo.findOne({
//     _id: id
// }).then(todo => console.log("Todo", todo._doc));
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('Unable to find todo')
//     }
//     console.log('todo', todo._doc)
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2))

}, (e) => {
    console.log(e)
});
