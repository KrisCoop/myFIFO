const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('db is connected')
    })
    .catch((err)=>{
        console.log('Db not connected.')
    })



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})