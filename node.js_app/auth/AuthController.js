const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const User = require('../model/user.model');

//Configure JWT
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

router.post('/login', (req, res) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(500).send('Error on the server');
    if (!user) return res.status(404).send({auth: false, token: null});

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({auth: false, token: null});

    const token = jwt.sign({id: user._id}, config.secret, {
      expiresIn: 3600
    });
    res.status(200).send({auth: true, token: token});
  });
});

router.get('/logout', (req, res) => {
  res.status(200).send({auth: false, token: null});
});

router.post('/register', (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  user.save()
    .then((user) => {
      const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 3600
      });
      res.status(200).send({auth: true, token: token});
    })
    .catch(err => {
      if(err) return res.status(500).send('There was a problem registering the model.');
  });
});

router.get('/about', VerifyToken, function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

module.exports = router;
