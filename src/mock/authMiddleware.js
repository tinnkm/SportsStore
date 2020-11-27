const jwt = require('jsonwebtoken');

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "1";

module.exports = function(req,res,next){
    if(req.url === '/login' && req.method === 'POST'){
        if(req.body !== null && req.body.name === USERNAME
            && req.body.password === PASSWORD){
                let token = jwt.sign({data: USERNAME,expiresIn: '1h'},APP_SECRET)
                res.json({success: true,token})
            }else{
                res.json({success: true})
            }
            res.end();
            return;
    }else if((req.url.startsWith("/products") && req.method !== "GET") || 
            (req.url.startsWith("/orders") && req.method !== "POST")){
        let token = req.headers['authorization'];
        if(token !== null && token.startsWith("Bearer")){
            token = token.substring(7)
            try{
                jwt.verify(token, APP_SECRET)
                next();
                return;
            }catch(err){
                console.log(err)
            }
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}