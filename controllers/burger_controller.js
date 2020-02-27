// Import Express
var express = require("express");

// Import `burger.js`
var importBurgerJs = require("../models/burger.js");

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

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
    burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
      // Send back ID for new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        sleepy: req.body.sleepy
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows changed, then ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  