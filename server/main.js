var express = require('express');

var app = new express();

// added boddy parser middleware for mor complcated requests like post and etc.
var parser = require('bady-parser');

app.get('/', (req, res) => {
    console.log('Working!');
    res.render('./../app/index.ejs',{});
})
.use(express.static(--dirname + '/../app'))
.listen(7777);


// middleware
// handles json requestds
app.use(parser.json());
//handles post reequests with express
app.use(parser.urlencoded({extended:false}));
// this middleware allows us to interact with the back end from the front end of our app

require('./routes/items.js')(app);