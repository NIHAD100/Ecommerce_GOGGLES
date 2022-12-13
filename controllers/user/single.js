
const productView = require('../../model/userProduct')




const singlePage = async(req,res)=>{
    let userData = req.session.user
    let productId = req.params.id
    let product = await productView.viewProductDetails(productId)
    console.log('helo');
    if(userData){
        res.render('user/usersinglepage',{admin:false,user:true,product,userData })
        
    }else{
        res.render('user/usersinglepage',{admin:false,user:true,product,userData:false })

    }

}

module.exports = {
    singlePage
}


