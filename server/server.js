// import dotenv from 'dotenv';
// import express from 'express';
// import mongoose from 'mongoose';
// const path = require('path');

const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
// const app = express();
// const PORT = process.env.PORT;
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
//   .catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify', false);

// const express = require('express');

// const app = express();
// const PORT = 3000;

// app.use(express.json);
// app.use(express.urlencoded());

// app.listen(PORT, ()=>console.log(`listening on port${PORT}`) )

// const port = process.env.PORT || 5000;
// //console.log('connection url: ', process.env.CONNECTION_URL)
// mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(()=> console.log('connected to db'))
//   .catch(err => console.log(err))

// app.listen(port, ()=> console.log(`Listening on ${port}`))
