const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0.yfju4kr.mongodb.net/user-managment')

app.get('/', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/create-user', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log("Server started")
})