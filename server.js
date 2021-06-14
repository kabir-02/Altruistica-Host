const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');


PORT = 8082;

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', /*please change the password accordingly*/
  database: 'funddb'
});

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/initial_signup', (req, res) => {
  var users= req.body;
  var values = [];


values.push([users.email, users.Create_pw,users.Confirm_pw]);

console.log(users)
console.log(values)
db.query('INSERT INTO initial_signup (email, Create_pw, Confirm_pw) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send(err);
  }
 else {
     res.send('Success');
  } }
  )
})
app.get('/init', function(req, res){
  var query = db.query('SELECT email FROM initial_signup',function(err, result) {
    // Neat!
  });
  console.log(query)
  res.end('success')
})

/*
app.get("/", (req, res) => {
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send('hello world');
});*/
  

/*


app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});


app.get("/", (req, res) => {
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send('hello world');
});
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
*/