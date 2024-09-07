// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//     name: {type: String, required: true },
//     email: { type: String, required:true },
//     message: { type: String, required: true},
//     submittedAt: { type: Date, default: Date.now}
// });

// module.exports = mongoose.model('Form', formSchema);


const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Form',formSchema);