const UserModel = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const config = require('constants')

module.exports = {
    register: async(req,res)=>{
        let {name, phone, email, password, linkedin, profession} = req.body;
        bcrypt.hash(password,8,(err,hashedPassword)=>{
            if(err)
                return res.json({status:500, message:err})
            UserModel.create({
                name:name,
                phone:phone,
                email:email,
                password:hashedPassword,
                linkedin:linkedin,
                profession:profession
            },
            (err, userzz) => {
                if (err) {
                    return res.json({
                        status: 500,
                        message:err
                    });
                }

                let token = jwt.sign({ id: userzz._id }, "privacyhaibhai", {
                    //jwt sign encodes payload and secret
                    expiresIn: 86400 // expires in 24 hours
                });
                res.json({ status: 200, token: token });
        });

    })
},

    login(req,res) {
        let {email, password} = req.body;
        console.log("Hello world");
        UserModel.findOne({email:email}, (err,userzz) =>  {
            if(err)
                return res.json({status:500,message:err})
            else if(!userzz)
                return res.json({status:404,message:"no such user exists"})
            else{
                bcrypt.compare(password,userzz.password,(err,result)=>{
                    if(err){
                        return res.json({status:500, message:"internal server error"})
                    }
                    else{
                        let token = jwt.sign({id:userzz._id},"privacyhaibhai",{
                            expiresIn: 86400
                        })
                        return res.json({status: 200, token: token})
                    }
                })
            }
        })
    }
}
