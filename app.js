let express = require('express');
let app = express();
let morgan =require('morgan')

// Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

// Morgan logger
app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));
app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

// Routes
let users = require('./routes/userRouter.js')
app.use('/api/users',users)
let login = require('./routes/loginRouter.js')
app.use('/api/login',login)
let signup = require('./routes/signupRouter.js')
app.use('/api/signup',signup)

// Listening server
app.listen(3000, () => console.log('Example app listening on port SACENG!'))
