const userProductView = require('../../model/userProduct');
const productView = require('../../model/userProduct')
const { Product_Details } = require('../../config/collection');




const singlePage = async(req,res)=>{
    let userData = req.session.user
    let productId = req.params.id
    let product = await productView.viewProductDetails(productId)
    console.log('helo');
    if(userData){
        userProductView.displayProduct().then((productDetails) => {
        res.render('user/usersinglepage',{admin:false,user:true,product,userData, productDetails })
        })
        
    }else{
        userProductView.displayProduct().then((productDetails) => {
        res.render('user/usersinglepage',{admin:false,user:true,product,userData:false, productDetails  })
        })

    }

}

module.exports = {
    singlePage
}


