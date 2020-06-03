const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5ed687b379bd88572a8ca746';

const userId = '5ed63db8724a6de24ea9cb6a';
//
// Todo.remove({}).then((result) => {
//     console.log(result)
// });

Todo.findByIdAndRemove(id).then((todo) => console.log(todo._doc));