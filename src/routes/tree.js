const express = require('express');

const router = express.Router();
const Tree = require('../models/tree');

// Endpoint to add new tree
router.post('/', async (req, res) => {
  try {
    const newTree = new Tree(req.body);

    // Save the document to the collection
    await newTree.save();
    
    res.json(newTree);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// // E
module.exports = router;
