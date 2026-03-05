const express = require('express')
const cors = require('cors')
const PORT = 4000

const app = express()

app.use(cors())
app.use(express.json())

// connect to DB - not now

const taskRouter = require('./routes/tasks.router')
app.use('/api/tasks', taskRouter)



app.listen(PORT,() => console.log("Server is up - port 4000"));