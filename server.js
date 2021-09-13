const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());

// const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://member2021:member2021@cluster0.klxfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });

const { connection } = mongoose;
connection.once('open', () => {
  console.log('mongoDB database connection established successfully');
});

const memberRouter = require('./routes/member');

app.use('/member', memberRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
