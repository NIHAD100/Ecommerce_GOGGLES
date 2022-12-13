const express = require('express')
const router = express.Router();
const getLogin = require('../controllers/user/login');
const getCart = require('../controllers/user/cart');
const about = require('../controllers/user/about');
const single = require('../controllers/user/single');
const getprofile = require('../controllers/user/profile')
const shop = require('../controllers/user/shop');
const contact = require('../controllers/user/contact');
const getWhislist = require('../controllers/user/whishlist');
const getCoupon = require('../controllers/user/usercoupon');

const { SessionChecker } = require('../middleware/sessionmiddleware');
const sessionChecker= require('../middleware/sessionmiddleware')



// for userlogin and signup control

router.get('/',getLogin.firstClick)
router.get('/login',getLogin.userLogin)
router.post('/login',getLogin.loginAction)
router.get('/signlogin',getLogin.userLogin)
router.post('/signup',getLogin.userRegister)
router.post('/loginaction',getLogin.loginAction)
router.post('/otpverify',getLogin.otpverification)


// for userlogout
router.get('/logout',getLogin.userLogout)


//for single product page
router.get('/single/:id',single.singlePage)

// for profile
router.get('/profile',sessionChecker.userSessionChecker,getprofile.showProfile)
router.get('/edituprofile',sessionChecker.userSessionChecker,getprofile.editProfile)
router.post('/editprofile',sessionChecker.userSessionChecker,getprofile.changeProfile)
router.get('/addAddress',sessionChecker.userSessionChecker,getprofile.addAddress)
router.post('/add-address',sessionChecker.userSessionChecker,getprofile.addressAdd)

//for shop page
router.get('/shop',shop.shopPage)

//for about page
router.get('/about',about.aboutPage)

//for contact page
router.get('/contact',contact.contactPage)


//for card add page
router.get('/cart',sessionChecker.userSessionChecker,getCart.clickCart)
router.get('/add-to-cart/:id',getCart.addTocart)
router.post('/change-product-quantity',getCart.changeProductQuantity)
router.delete('/deletefromcart',sessionChecker.userSessionChecker,getCart.deleteFromCart)


// for whislist setting
router.get('/whislist',sessionChecker.userSessionChecker,getWhislist.clickWhislist)
router.post('/addtowhishlist',sessionChecker.userSessionChecker,getWhislist.addToWhishlist)
router.delete('/deletefromwishlist',sessionChecker.userSessionChecker,getWhislist.deleteFromWish)

// for place order
router.get('/proceedToCheckout',sessionChecker.userSessionChecker,getCart.showProceedToCheckoutPage)
router.get('/place-order',sessionChecker.userSessionChecker,getCart.placeOrder)
router.post('/place-orderPay',sessionChecker.userSessionChecker,getCart.placeOrderPay)
router.get('/orderPlaced',sessionChecker.userSessionChecker,getCart.orderPlaced)
router.get('/orderList',sessionChecker.userSessionChecker,getCart.orderList)
router.get('/view-order-product',sessionChecker.userSessionChecker,getCart.viewOrderProducts)
router.post('/verify-payment',sessionChecker.userSessionChecker,getCart.verifyPayment)

// for coupon
router.post('/applycoupon',sessionChecker.userSessionChecker,getCoupon.applytheCoupon)


module.exports = router;




