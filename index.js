const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb+srv://Suplex:asdf321@cluster0.ugstu.mongodb.net/Heroku_testApp1?retryWrites=true&w=majority')

const start = async () => {
  try {
    await client.connect()
    console.log('MongoDB')
  } catch (e) {
    console.log(e)
  }
}

app.get('/', async(req, res) => {
  await res.sendFile(__dirname + "/index.html")
})

app.get('/items', async(req, res) => {
  const items = await client.db('test').collection('items').find().toArray()
  res.json(items)
})

app.get('/users', async(req, res) => {
  const users = await client.db('test').collection('users').find().toArray()

  res.json(users)
})

app.listen(process.env.PORT || 3000, () => start())