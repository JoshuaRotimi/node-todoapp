const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ).then(() => console.log('Connected!'));

module.exports = {mongoose};

// mongodb+srv://joshuarotimi:<password>@cluster0-kydeo.mongodb.net/test?retryWrites=true&w=majority