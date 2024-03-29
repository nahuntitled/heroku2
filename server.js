const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors');

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(cors())

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/tours', require('./routes/api/tours'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/countrys', require('./routes/api/countrys'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/admin', require('./routes/api/admin'));
app.use('/api/client', require('./routes/api/client'));
app.use('/api/comment', require('./routes/api/comment'));

// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));