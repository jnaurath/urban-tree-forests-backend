const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  name: String,
  species: String,
  height: Number,
});

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;
