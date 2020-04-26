const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/sign-in')
const profile = require('./controllers/profile-id')
const image = require('./controllers/image')


const db = knex({client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '1212',
      database : 'face_detector'
    }
  })


const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => { res.send(database.users) })
app.post('/signin', signin.handleSignIn(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfileGet(db))
app.put('/image', image.handleImagePut(db))

app.listen(process.env.PORT || 3000, () => { console.log(`app is running on port ${process.env.PORT}`) })