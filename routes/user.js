const express = require('express');
const router = express.Router();
const db = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var password = '';

// Middleware to parse request bodies
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/', function(req, res, next) {
  res.render('user'); // Assuming you have a template engine for rendering
});

router.post('/create', function(req, res, next) {
  const userDetails = req.body;
  const name = req.body.name;
  const email = req.body.email;
   password = req.body.password;
   
   
   bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      
      var msql="Select * from user where email=?"
      db.query(msql,[email],function(err,result){
         if (result.length ==0)
         {
          var sql = 'INSERT INTO user (name, email, password) values(?,?,?)';

          db.query(sql, [name,email,hash], async function(err, data) {
            if (err) throw err;
            console.log("User data is inserted successfully");
            res.redirect('/login'); // Redirect to the form page after inserting data
          });
         }


         else
           {
              console.log('User already exist')
              res.redirect('/login');
           }
          


      });

      

        // Now we can store the password hash in db.
    });
});
});

module.exports = router;