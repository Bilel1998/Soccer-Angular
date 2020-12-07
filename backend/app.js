//import Express module
const express = require('express');
// create backend application
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const multer = require('multer');
const path = require('path');
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))
const Match = require('./models/match');

// import mongoose module
const mongoose = require('mongoose');
const User = require('./models/user');
const Stadium = require('./models/stadium');

// connect application to DB named soccerDB
// if not exists , create DB , else connect automatically
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
  extension;
  cb(null, imgName);
  }
  });
app.get('/allMatches', (req, res) => {
  console.log('I am here for allMatches');
  //let matches = [
  //   { id: 1, teamOne: "RM", teamTwo: "FCB", scoreOne: 3, scoreTwo: 1 },
  // { id: 2, teamOne: "RM", teamTwo: "FCB", scoreOne: 5, scoreTwo: 1 },
  // { id: 3, teamOne: "RM", teamTwo: "FCB", scoreOne: 11, scoreTwo: 1 }];
  Match.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        message: 'Here all objects',
        matches: docs
      });
    }
  });
});

app.post('/addMatch', multer({ storage: storage }).single('image'), (req, res) => {
  console.log("Here in adding", req.body);
  url = req.protocol + '://' + req.get('host');
  const match = new Match({
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    image : url + '/images/' + req.file.filename
  });
  
  match.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});

app.delete('/deletMatch/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  Match.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
app.get('/displayMatch/:id', (req, res) => {
  console.log("here in get ", req.params.id);
  Match.findOne({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          match: data
        })
      }
    }
  )

});
app.put('/editMatch/:id', (req, res) => {
  console.log('here in edit ', req.params.id);
  const match = new Match({
    _id: req.body._id,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo
  });
  // update takes 2 params :  1st for search object and 2nd object to replace it
  Match.update({ _id: req.params.id }, match).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Updated Successfully'
        })
      }
    }
  )
});
app.get('/userByEmail/:email', (req, res) => {
  console.log('login:', req.params.email);
  //let matches = [
  //   { id: 1, teamOne: "RM", teamTwo: "FCB", scoreOne: 3, scoreTwo: 1 },
  // { id: 2, teamOne: "RM", teamTwo: "FCB", scoreOne: 5, scoreTwo: 1 },
  // { id: 3, teamOne: "RM", teamTwo: "FCB", scoreOne: 11, scoreTwo: 1 }];
  user.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        message: 'Here all objects',
        matches: docs
      });
    }
  });
});
app.post('/addStadium',  (req, res) => {
  console.log("Here in adding stadium", req.body);

  const stadium = new Stadium ({
   
     name:req.body.name,
     country:req.body.country,
     capacity:req.body.capacity
  });
  stadium.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});

app.post('/addUser',  (req, res) => {
  console.log("Here in adding user", req.body);

  const user = new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:e=req.body.password,
    cPassword:req.body.cPassword
  });
  user.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});
app.post('/loginUser', (req, res) => {
  console.log("LOGIN", req.body);
  User.find({email:req.body.email, pwd:req.body.pwd}).then(
    data => {
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }
  ); 
});
app.get('/getAllUsers', (req, res) => {
  console.log('I am here for allUsers');

  User.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        users : docs
      });
    }
  });
});
app.get('/allStadiums', (req, res) => {
  console.log('I am here for allStadiums');

  Stadium.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      console.log(docs)
      res.status(200).json({
        stadiums : docs
      });
    }
  });
});
app.delete("/deleteStadium/:id", (req, res) => {
  Stadium.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Deleted Successfully",
    })
  );
});
app.get('/api/search/:term', (req,res)=> {
  console.log('req.body', req.body);
  console.log('req.params', req.params.term);
  Match.find({ teamOne: req.params.term }).then(
  result => {
  console.log('Here searched result', result);
  if (result) {
  res.send(result);
  }
  }
  )
});

//app.post('/addMatch' , (req,res)=> {
//console.log("Here in adding");
//});

// preparer app pour etre exporté
module.exports = app;