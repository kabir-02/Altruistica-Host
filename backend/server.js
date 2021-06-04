const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');


PORT = 8082;

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'funddb'
});

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});
  
/*
app.get("/", (req, res) => {
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send('hello world');
});*/
  



app.listen(PORT, console.log(`Server started on port ${PORT}`));
