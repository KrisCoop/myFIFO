const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const session = require('express-session');
require('dotenv').config();
const controller = require('./controller');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('db is connected')
    })
    .catch((err)=>{
        console.log('Db not connected.')
    })

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send('this worked')
})

app.post('/login', controller.login)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})