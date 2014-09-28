var express  = require('express');            // Express.js
var http = require('http');                   // http Server 
var lib = require('./javascript/routesLib.js');
//Variables 

  //ports
  var port     = process.env.PORT || 65002;
  
  //express
  var app = express(); 

  //HTTP Server

  var server = http.createServer(app);


// configuration ===============================================================

  //Express

  app.configure(function() {

  	// set up our express application
  	app.use(express.logger('dev')); // log every request to the console
  	app.use(express.cookieParser()); // read cookies (needed for auth)
  	app.use(express.bodyParser()); // get information from html forms

  	app.set('view engine', 'ejs'); // set up ejs for templating
  });


//  =============================== Routes =======================================
require('./app/routes.js')(app,lib); // load our routes and pass in our app and fully configured passport

//  ================================ Launch ======================================
server.listen(port);