const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const notesRoutes = require('./api/routes/notes.js');

mongoose.connect('mongodb+srv://node-todo:' +process.env.MONGO_ATLAS_PW +'@node-rest-todo-oxanw.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(morgan('dev'));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

//Route which will handle requests to .../notes
app.use('/notes', notesRoutes);


//Now I will add headers that will give access to cross origon resource sharing
//Because I want that any website can use my API
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");

    if(req.method === 'OPTIONS'){
        res.header('Access-Allow-Control-Methods', 'GET, PATCH, POST, DELETE');
        return res.status(200).json({});
    }

    //This is because I obviosly want other routes to work
    next();
});


//Now if the code has come till here it definitely means that 
//requests were not send to the .../notes
// Because I didnt add next method in the previous routes
//So these requests are not wanted and we will give out some error
app.use((req, res, next) => {
    const error = new Error('Status not found');
    error.status = 404;
    //Here I am using status = instead of status() because I want the 404 status property of error
    next(error);
    //This will allow the code to continue
    //And Now the error is forwarded to the next app.use method
}
)

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
        
    })
})

module.exports = app;