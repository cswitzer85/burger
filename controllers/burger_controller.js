// Import Express
var express = require("express");

// Import `burger.js`
var burger = require("../models/burger.js");

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

// Get (All)
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  // Post (Create)
  router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, 0], function(result) {
      // Send back ID for new burger
      res.json({ id: result.insertId });
    });
  });
  
  // Put (Update)
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
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
  