const UserModel = require('../models/user');



    module.exports = {
        getUsers: (req, res) => {
            UserModel.find((err, result) => {
                res.send(result);
            })
        },
        getUser: (req, res) => {
            
            console.log(req.ID);
            let id =  req.ID;
            UserModel.findById(id, (err, result) => {
                if(!result) {
                    res.status(404);
                    res.send();
                    return;
                }
                res.send(result);
            })
        },
        updateUser: (req, res) => {
            let id = req.params.id;
            let {err, user} = UserAssembler(req.body);
            if(err) {
                res.status(422);
                res.send(err.error.details);
                return;
            }
            UserModel.findByIdAndUpdate(id, user, (err, result) => {
                res.send(result)
            })
        },
        deleteUser: (req, res) => {
            let id = req.params.id;
            UserModel.findByIdAndDelete(id, (err, result) => {
                res.send(result)
            })
        },
    }