const jwt = require('jsonwebtoken');
const constants = require('./constants');
module.exports = {
    checkAuth(req,res,next) {
     let auth =  req.header("authorization")
      jwt.verify(auth,constants.JWT_SECRET,(err, decoded) => {
          if(err)
          {
              res.status(401);
              res.send();
              return;
          }
        console.log(decoded.id);
        const ID = decoded.id;
        req.ID=ID;
        next();
      })
    }
}