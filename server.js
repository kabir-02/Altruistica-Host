const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser=require('body-parser');


app.use(cors())

PORT = 8082;

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
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

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

// app.post('/initial_signup', (req, res) => {
//   var users= req.body;
//   var values = [];


//   values.push([users.email, users.Create_pw,users.Confirm_pw]);

//   console.log(users)
//   console.log(values)
//   db.query('INSERT INTO initial_signup (email, Create_pw, Confirm_pw) VALUES ?', [values], function(err,result) {
//     if(err) {
//       res.send(err);
//     }
//   else {
//       res.send('Success');
//     } }
//     )
// })
app.post('/signup', (req, res) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  var users = req.body;
  var values = []
  values.push([users.name, users.email, users.create_pw, users.confirm_pw, users.phone, users.city, users.state, users.country])

  console.log(users)
  console.log(values)

  db.query('INSERT INTO user_info (Name, Email, Create_pw, Confirm_pw,  Mobile_no, City, State, Country) VALUES ?', [values], function(err, result){
    if(err){
      res.send(err);
    }
    else{
      res.send('success')
    }
  })
})
app.get('/init', function(req, res){
  var query = db.query('SELECT email FROM initial_signup',function(err, result) {
    // Neat!
  });
  console.log(query)
  res.end('success')
})

app.get('/lboard1', (req, res) => {
  const sqlSelect = "SELECT Name, Tamt_donated FROM user_info ORDER BY Tamt_donated DESC limit 0,1";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    result = JSON.stringify(result)
    console.log(result)
  });
  //res.end()
});

app.get('/lboard2', (req, res) => {
  const sqlSelect = "SELECT Name, Tamt_donated FROM user_info ORDER BY Tamt_donated DESC limit 1,1";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("successread")
  });
  //res.end()
});

app.get('/lboard3', (req, res) => {
  const sqlSelect = "SELECT Name, Tamt_donated FROM user_info ORDER BY Tamt_donated DESC limit 2,1";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("successread")
  });
  //res.end()
});

app.get('/support', (req, res) => {
  const sqlSelect = "SELECT Name from user_info where SupportStatus=1 ";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads Support")
  });
  //res.end()
});

app.get('/displayfunds', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_status=0";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads funds")
  });
  //res.end()
});

app.get('/displayall', (req, res) => {
  console.log(req.query.class);
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_class='"+req.query.class+"';"
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads funds")
  });
  //res.end()
});

app.get('/display', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_class='"+req.query.class+"' AND fr_category='"+req.query.category+"';"
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads funds")
  });
  //res.end()
});


app.get('/displayapprovals', (req, res) => {
  const sqlSelect = "SELECT fr_id, fr_title, fr_desc, fr_gentime, fr_target, fr_deadline, Name, City, State FROM fundraisers, user_info WHERE fr_uid=user_id AND fr_status=0";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads Approvals")
  });
  //res.end()
});

app.put("/updateApprovalStatus", (req,res)=>{
  const fr_id=req.body.fr_id;
  const sqlUpdate="UPDATE fundraisers SET fr_status=1 WHERE fr_id="+fr_id+";"
  db.query(sqlUpdate,(err, result)=>{
    if(err)
    console.log(err);
  })
});

app.get('/fundraising', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_status=1 AND fr_class='Fundraising";
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
    console.log("Reads fundraisers")
  });
  //res.end()
});

app.get('/searchall', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_title LIKE '%"+req.query.criteria+"%';"
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
  });
  //res.end()
});

app.get('/searchfunds', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_class='"+req.query.class+"' AND fr_title LIKE '%"+req.query.criteria+"%';"
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
  });
  //res.end()
});

app.get('/searchfundsbycategory', (req, res) => {
  const sqlSelect = "SELECT fr_title, fr_desc, fr_gentime, fr_target, fr_deadline FROM fundraisers WHERE fr_class='"+req.query.class+"' AND fr_category='"+req.query.category+"' AND fr_title LIKE '%"+req.query.criteria+"%';"
  db.query(sqlSelect, (err, result)=> {
    res.send(result);
  });
  //res.end()
});

app.post("/create_fund", (req, res) => {
  var funds = req.body
  const values = []
  values.push(Object.values(funds))
  console.log('funds',funds)
  db.query(
    `INSERT into fundraisers (${Object.keys(funds).toString()}) VALUES ?`,
    [values],
    function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.status(200).send({ Success: result })
      }
    }
  )
})
app.post("/update_user_profile", (req, res) => {
  var user_profile = req.body
  console.log("user_profile", user_profile)

  db.query(
    `UPDATE user_info SET NAME='${user_profile.name}', CITY='${user_profile.city}',STATE='${user_profile.state}', Create_pw='${user_profile.password}',Confirm_pw='${user_profile.confirm_password}', Country='${user_profile.country}', Mobile_no='${user_profile.phone}' WHERE Email='${user_profile.email}'`,
    function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.status(200).send({ Success: result })
      }
    }
  )
})

app.get("/get_user_profiles", function (req, res) {
  var query = db.query(
    "SELECT fr_id,fr_title,fr_target FROM fundraisers",
    function (err, result) {
      // Neat!
      if (err) {
        res.status(400).send(err)
      } else {
        console.log("result", result)
        res.status(200).send(result)
      }
    }
  )
})


/*
app.get("/", (req, res) => {
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  res.send('hello world');
});*/
  



app.listen(PORT, console.log(`Server started on port ${PORT}`));
