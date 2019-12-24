const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const constants = require('./constants');
const middleware = require('./middleware');
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const app = express();
const cors = require('cors')


app.use(cors());
app.use(bodyParser.json());
mongoose.connect(constants.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/register',AuthController.register);
app.post('/login',AuthController.login);
app.get('/users',middleware.checkAuth,UserController.getUser);

app.listen(constants.PORT, () => {
    console.log(`app is listening on: ${constants.PORT}`);
})
