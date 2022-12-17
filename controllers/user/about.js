const minicarousal = require('../../model/mini-banner')
const carousal = require('../../model/banner')

const aboutPage = (req, res) => {
    let userData = req.session.user
    if (userData) {
        carousal.showBanner().then((banner)=>{
        minicarousal.showBanner().then((minibanner)=>{
        res.render('user/userabout', { admin: false, user: true, userData ,minibanner, banner })
        })
    })
    } else {
        carousal.showBanner().then((banner)=>{
        minicarousal.showBanner().then((minibanner)=>{
        res.render('user/userabout', { admin: false, user: true, userData ,minibanner ,banner })
        })
    })
    }
}

module.exports = {
    aboutPage
}



