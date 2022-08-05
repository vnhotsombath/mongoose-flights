// point of file: to create a connection with mongoDb server running on port 27017

const mongoose = require('mongoose');

//flights is the name of the db, it will either connect to a flights db in mongodb or it will create a flights db in mongodb
mongoose.connect('mongodb://localhost/flights');

//this will fire when mongoose has established a connection with mongodb on port 27017
mongoose.connection.on('connected', function(){
     // this function will fire once connected to mongodb
     console.log(`Connected to Mongodb at 27017`)
 })
