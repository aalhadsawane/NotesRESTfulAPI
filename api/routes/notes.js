const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//We import the note model
const Note = require('../models/note');



//It will also give the count
router.get('/', (req, res, next) => {
    let lim = 200;
    if(req.query.limit !== undefined){
        lim = req.query.limit;
    }
    Note.find().limit(parseInt(lim))
    .select('name _id content')
    .exec()
    .then(docs => {
        const response = {
            count : docs.length,
            notes : docs.map(doc => {
                return {
                    name : doc.name,
                    _id : doc._id,
                    content : doc.content,
                    request : {
                        type : 'GET, UPDATE, DELETE',
                        url : 'http://localhost:3000/notes/' + doc._id
                    }
                };
            })
        };
        
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    })
});


router.post('/', (req, res, next) => {

    //This object is imported as a model from api/models/note
    const note  = new Note({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        content : req.body.content
    });
    
    note
    .save()  
    .then(result => {
        console.log(result);
        
        res.status(200).json({
            message : 'New note made',
            createdNote : {
                    name : result.name,
                    content : result.content,
                    _id : result._id,
                    request : {
                        type : 'GET, UPDATE, DELETE',
                        url : 'http://localhost:3000/notes/' + result._id
                    }
                }
            
        });
    })
    .catch(err => {
        console.log('err');
        res.status(500).json({
            error : err
        })
    })

});

router.get('/:noteId', (req, res, next) => {
    const id = req.params.noteId;
    
    Note.findById(id)
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json({
            
            name : docs.name,
            content : docs.content,
            _id : docs._id,
            request : {
            type : 'GET, UPDATE, DELETE',
            url : 'http://localhost:3000/notes/' + docs._id
            }
            
        });
        
    })
    
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    })
});

router.patch('/:noteId', (req, res, next) => {
    const id = req.params.noteId;
    //updateOps is an object meaning update operations
    const updateOps = {};
    
    // //Now we loop through all ops(operations) in the request body (It must be an array)
    for (const ops of req.body){
        //It means the key is property name of te current op and value is value of current operation
        updateOps[ops.propName] = ops.value
    }
    Note.findOneAndUpdate(
        {_id: id},
        {
            $set : {updateOps}
        },
        {new : true}
    )
    .then(result => {
        res.json({
            message : 'Note Updated',
            updatedNote : result,
            request : {
                type : 'GET, UPDATE, DELETE',
                url : 'http://localhost:3000/notes/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    })
});

router.delete('/:noteId', (req, res, next) => {
    noteId = req.params.noteId;

    Note.remove({_id : noteId})
    .exec()
    .then(result => {
        res.status(200).json({
            message : "Note deleted",
            deletedNote : {
                id : noteId
            }
            
        });
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            error: "Id does not exist"
        })
    })
});

module.exports = router;