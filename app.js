var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: true}));

var users = require('./users.json');
var myArray = []

////////////myData api////////////
app.get('/mydata', function (req, res) {

    res.send(myArray);

});

app.post('/mydata/create', function (req, res) {
    //console.log(req.body);
    myArray.push({firstName:req.body.firstName,
                lastName:req.body.lastName,
                userName:req.body.userName})
    res.send(myArray);
});

app.put('/mydata/:value/edit', function (req, res) {

});
//////// routes//////

//getting all data
app.get('/', function (req, res) {
    res.send(users);
})
//getting first name
app.get('/firstRoute', function (req, res) {
    res.send(users[0]);
})
// request parameter
app.get('/users/:userName', function (req, res) {
    console.log(req.params.userName);
    var foundUser = 'no user found';

    for (u in users) {
        if (users[u].userName == req.params.userName)
            foundUser = users[u]
    }
    console.log(foundUser);
    res.send(foundUser);
});

//query parameter

app.get('/users/find/query', function (req, res) {

    console.log(req.query.userName);
    var foundUser = 'No User Found';

    for (u in users) {
        if (users[u].userName == req.params.userName)
            foundUser = users[u]
    }
    console.log(foundUser);
    res.send(foundUser);
});

//linsitening on a port
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
