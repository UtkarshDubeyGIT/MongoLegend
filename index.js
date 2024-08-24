const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const db = require('./config/db')
require('dotenv').config();

db();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.listen(process.env.PORT || 3000, 
    console.log("hello world")
)