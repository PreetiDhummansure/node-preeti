exports.auth=( req,res,next)=>{
  console.log("first",req);
    let token=req.headers.Authorisation ||  "";


    if(!token)return res.status(401).json("you are unauthorised");
token=token.replace("bearer ",   " ");
console.log(token,req.headers.Authorisation);
if (token==="123456") next();
else return res.status(401).json("you are unauthorised");
};