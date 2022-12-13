
const shopPage = (req, res) => {
    let userData = req.session.user
    if (userData) {
        res.render('user/usershop', { admin: false, user: true, userData })
    } else {
        res.render('user/usershop', { admin: false, user: true, userData })
    }
}

module.exports = {
    shopPage
}