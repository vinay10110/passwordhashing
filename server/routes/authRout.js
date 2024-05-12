const express=require('express');
const argon2=require('argon2');
const router=express.Router();
const jwt=require('jsonwebtoken');
require('dotenv').config()
const User=require('../models/User')
const secret=process.env.SECRET_KEY;
router.post('/register',async (req,res)=>{
    const {username,password}=req.body;
    const hash=await argon2.hash(password);
    try {
        const userDoc=await User.create({
            username,
            password:hash,
        })
        res.json(userDoc);
      
    } catch (error) {
        res.status(400).json(error);
    }
});
router.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body;
    const userDoc=await User.findOne({username});
    const id=userDoc.id;
    if(!userDoc){
        return res.status(404).json({message:"user not found"});
    }
    const passOk=argon2.verify(userDoc.password,password);
    if(passOk){
const token=jwt.sign({username,id},secret,{expiresIn:'1h'});
return res.json({ username, id, token });
    }
    else {
        return res.status(400).json({ message: 'Wrong credentials' });
      }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
    
})
module.exports=router;