const express = require("express")
const mongoose = require('mongoose')
const session = require("express-session");
const morgan = require("morgan")
const colors = require("colors")
const connectDB = require("./config/db")
const MongoStore = require("connect-mongo")(session);
const { errorHandler } = require("./middleware/errorMiddleware")
const dotenev = require('dotenv').config();
const port = process.env.PORT || 5000

connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))

app.use('/api/goals', require("./routes/goalRoutes"))

app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`listening to ${port}`)
});