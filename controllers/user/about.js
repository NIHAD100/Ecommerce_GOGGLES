

const aboutPage = (req, res) => {
    let userData = req.session.user
    if (userData) {
        res.render('user/userabout', { admin: false, user: true, userData })
    } else {
        res.render('user/userabout', { admin: false, user: true, userData })
    }
}

module.exports = {
    aboutPage
}



