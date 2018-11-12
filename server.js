// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// // Sets an initial port.
// var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false});

// app.use(bodyParser.json({ type: 'application/*+json'}));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
// app.use(bodyParser.text({ type: 'text/html'}));



// //points server to routes
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


// // listener to start server
// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const apiRoutes = require ('./app/routing/apiRoutes');
const htmlRoutes = require ('./app/routing/htmlRoutes');

app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log('App listening on PORT' + PORT);
})
