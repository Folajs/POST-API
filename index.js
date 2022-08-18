const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/postapi-db'
const app = express();

console.log(url);
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send(`<h1>🐰 Mongoose API</h1>`));

app.use('/api/kittens', require('./route/api/kittens'));

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} for ${process.env.NODE_ENV}`);
});