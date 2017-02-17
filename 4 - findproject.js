var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    
    collection.find({
      age: { 
        $gt: +age 
      }
    }, { 
      _id: 0
    , age: 1
    , name: 1 
    }).toArray(function(err, documents) {
        if (err) throw error;
        console.log(documents);
        db.close();
    });
});