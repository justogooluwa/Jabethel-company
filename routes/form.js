const express = require('express');
const router = express.Router();
const db = require('../database');

// Middleware to parse request bodies
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/', function(req, res, next) {
  res.render('form'); // Assuming you have a template engine for rendering
});

router.post('/create', function(req, res, next) {
  const userDetails = req.body;
  const sql = 'INSERT INTO registrationform SET ?';

  db.query(sql, userDetails, function(err, data) {
    if (err) throw err;
    console.log("User data is inserted successfully");
    res.redirect('/'); // Redirect to the form page after inserting data
  });
});

module.exports = router;