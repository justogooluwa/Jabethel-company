const express = require('express');
const router = express.Router();
const db = require('../database');
const bcrypt = require('bcrypt');



// Middleware to parse request bodies
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/', function(req, res, next) {
  res.render('login'); // Assuming you have a template engine for rendering
});

router.post('/create', function(req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const mypassword = req.body.password;
  const userDetails = req.body;
  const sql = 'select * from user where email = ?';
  

  db.query(sql, [email], function(err, result) {
    if (err) throw err;
    if (result.length == 0) {
      console.log("--------> User does not exist");
      res.sendStatus(404)
      
     } 
     else {
        const hashed = result[0].password
        //get the hashedPassword from result
       //if ( bcrypt.compare(mypassword, hashed)) {
        bcrypt.compare(mypassword, hashed, function(error,result){
         if (result)
         {
           console.log("---------> Login Successful");
          console.log(result);
          console.log(hashed);
          res.redirect('/form');
       } 
       else {
       console.log("---------> Password Incorrect");
       res.send("Password incorrect!");
       } //end of bcrypt.compare()
        })
       
     }//end of User exists i.e. results.length==0
    
      });
});

module.exports = router;