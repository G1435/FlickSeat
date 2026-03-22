const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

console.log("🔥 Server file started")

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movieDB')
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err))

// TEST ROUTE
app.get('/', (req, res) => {
  res.send("Server Working ✅")
})

// START SERVER
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000")
})