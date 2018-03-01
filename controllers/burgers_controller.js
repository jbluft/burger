var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


router.post("/api/burgers", function(req, res) {
    burger.create([ "burger_name" ], [ req.body.name ], function(result) {
res.redirect('/');
// res.json({ id: result.insertId });
    });
  });
  
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
     console.log(condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;