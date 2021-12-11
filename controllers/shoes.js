// DEPENDENCIES
const express = require('express');

// ROUTER OBJECT
const shoesRouter = express.Router();
const Shoes = require('../models/shoes');



// Index
shoesRouter.get('/', (req, res) => {
    Shoes.find({}, (err, allShoes) => {
      res.render("index.ejs", {
        shoe: allShoes,
      });
    });
});
  // New
  shoesRouter.get("/new", (req, res) => {
    res.render("new.ejs")
  });
  
  // Delete
  shoesRouter.delete('/:id', (req, res) => {
    Shoes.findByIdAndDelete(req.params.id, (err, copyOfDeletedShoes) => {
    res.redirect("/shoecollection")
    });
  });

  // Update
  shoesRouter.put('/:id', (req, res) => {
    Shoes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedShoes) => {
        res.redirect(`/shoecollection/${req.params.id}`);
    });
  });

  // Create
  shoesRouter.post('/', (req, res) => {
    Shoes.create(req, body, (err, shoes) => {
    res.redirect('/shoecollection')
  });
});
// Edit
  shoesRouter.get('/:id/edit', (req, res) => {
    Shoes.findById(req.params.id, (err, editShoes) => {
        res.render('edit.ejs', { editShoes });
    });
});
// Show
  shoesRouter.get('/:id', (req, res) => {
    Shoes.findById(req.params.id, (err, foundShoes) => {
    res.send("show.ejs", {
      shoe: foundShoes
    });
});
}); 
  module.exports = shoesRouter;
