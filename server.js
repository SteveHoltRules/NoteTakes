const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Middleware
app.use(express.urlencoded({ extended: true }));
//Parse incoming JSON data
app.use(express.json());
//Static files - this has to be listed above the /api and /routes or else the html won't be picked up
app.use(express.static('public'));

//These routes will point to two different files that are specified at the top of the file
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listening event
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});