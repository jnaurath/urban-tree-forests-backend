const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const treesRouter = require('./routes/trees');
const treeRouter = require('./routes/tree');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Use the trees route
app.use('/trees', treesRouter);
app.use('/tree', treeRouter);



app.get('/', (req, res) => {
  res.send('Hello from your Node.js server!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});