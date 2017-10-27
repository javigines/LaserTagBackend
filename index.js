'use strict'

const mongoose = require ("mongoose")
const app = require('./app')
const confi = require('./config')

mongoose.connect(confi.db, function(err, res) { //TODO: Update with correct IP address.
  if(err) {
    console.log('ERROR: connecting to Database. ' + err); //TODO: Set proper error message.
  }
  app.listen(3000, function() {
    console.log(`Node server running on http:/localhost:${confi.port}`); // TODO: Set proper OK message.
});
});
