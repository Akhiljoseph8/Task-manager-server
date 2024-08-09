const jwt=require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
    try{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        const result=jwt.verify(token,process.env.secretKey)
        req.payload=result.userId
    }else{
        res.status(406).json("Please login to add your tasks")
    }
    next()

    }catch(err){
       res.status(406).json("Please login first")
    }
}

module.exports=jwtMiddleware