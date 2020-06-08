const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : { type: String, default: 'Untitled' },
    content : { type: String, default: '' }
});
//Here mongoose.Schema.Types.ObjectId tells that the _id will be an objectid
//mongoose.Types.ObjectId creates a constructor which makes an objectid so that is
//different and I want to just TELL mongoose that the _id will be an ObjectId
//instead of calling a constructor which doesnt makes any sense


module.exports = mongoose.model('Note', noteSchema);
//So now a Note object(model) is exported
//That means whenever somone calls require('../models/note.js')
//a Note model(model is just like an object) is returned!