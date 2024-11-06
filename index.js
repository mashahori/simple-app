const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const PORT = process.env.PORT || 8089

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
