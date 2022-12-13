
const contactPage = (req, res) => {
    let userData = req.session.user
    if (userData) {
        res.render('user/usercontact', { admin: false, user: true, userData })
    } else {
        res.render('user/usercontact', { admin: false, user: true, userData })
    }
}

module.exports = {
    contactPage
}