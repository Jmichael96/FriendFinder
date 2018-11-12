
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//requiring the apiRoutes.js
const apiRoutes = require ('./app/routing/apiRoutes');
//requiring the htmlRoutes.js
const htmlRoutes = require ('./app/routing/htmlRoutes');

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// server listening for port number
app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
})
