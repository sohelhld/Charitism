const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name :{type:String,require:true},
    city:{type:String,require:true}

})

const todoModel = mongoose.model('todo',todoSchema);

module.exports={todoModel}