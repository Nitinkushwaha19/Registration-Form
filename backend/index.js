const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/user', AuthRouter);
app.use('/products', ProductRouter);


app.get("/",(req,res) => {
    res.send("Listining to root page");
})

app.use((err, req, res, next) => {
    console.log(err.message);
    return res.status(500).json({ message: err.message, success: false });
});

app.get("/",(req,res) => {
    res.send("Listining to root page");
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
