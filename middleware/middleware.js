

exports.validate_form_inps = (req,res,next)=>{
    let pass = req.body.password
    if(pass.length >= 8){
        next()
    }else{
        res.json('Password length must be atleast 8 characters long')
    }
}

exports.isSubscribed = (req,res,next)=>{
    let subscribed
    if(req.body.subscribe == undefined){
        subscribed = false
    }else{
        subscribed = true
    }
    req.body["subscribed"] = subscribed
    next()
}