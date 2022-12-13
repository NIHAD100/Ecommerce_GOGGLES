const adminSessionChecker = (req,res,next)=>{
if(req.session.admin){
    next()
}else{
    res.render("admin/adminloginpage",{admin:false,user:false})
}
}

const userSessionChecker = (req,res,next)=>{
    if(req.session.loggedIn){
        next()
    }else{
        res.redirect('/login')
    }
}

module.exports={
    adminSessionChecker,
    userSessionChecker
}