const userProductView = require('../../model/userProduct');
const { Product_Details } = require('../../config/collection');

const shopPage = (req, res) => {
    let userData = req.session.user
    if (userData) {
        userProductView.displayProduct().then((productDetails) => {
        res.render('user/usershop', { admin: false, user: true, userData ,productDetails })
        })
    } else {
        userProductView.displayProduct().then((productDetails) => {
        res.render('user/usershop', { admin: false, user: true, userData ,productDetails })
        })
    }
}

module.exports = {
    shopPage
}