const express = require('express');
const router = express.Router();
const Tree = require('../models/tree');

// Endpoint to get all trees
router.get('/', async (req, res) => {
  try {
    const trees = await Tree.find();
    console.log(trees)
    res.json(trees);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


// Endpoint to delete all trees
router.delete('/', async (req, res) => {
  try {
    // Delete all trees from the database
    await Tree.deleteMany({});
    
    // Send a success response
    res.status(200).send('All trees deleted successfully.');
  } catch (error) {
    console.error(error);
    // If an error occurs, send a server error response
    res.status(500).send('Server Error');
  }
});

// // Endpoint to add new trees
// router.post('/', async (req, res) => {
//   try {
//     const newTree = new Tree(req.body);

//     // Save the document to the collection
//     await newTree.save();
    
//     res.json(newTree);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// // // Endpoint to setup
// // router.get('/setup', async (req, res) => {
// //   try {
// //     // Create a new Tree document
// //     const newTree = new Tree({
// //       name: 'Oak Tree',
// //       species: 'Quercus',
// //       height: 20,
// //     });

// //     // Save the document to the collection
// //     await newTree.save();

// //     res.send('Tree created successfully!');
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Error creating tree');
// //   }
// // });

module.exports = router;
