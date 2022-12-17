const loadBanner = require('../../model/mini-banner')


const showBanner = (req,res)=>{
    loadBanner.showBanner().then((minibanner)=>{
        res.render('admin/mini-banner',{admin:true,user:false,title:'Banner Control Page',minibanner})
    })
}


const addBanner = (req,res)=>{
    
    
    loadBanner.addToBanner({
        picture:req.file.path
    }).then((minibanner)=>{
        res.redirect('/admin/mini-banner')
    })
}

const deleteBanner = (req,res)=>{
    
   let id = req.query.id

    loadBanner.deleteBanner(id).then((response)=>{
        res.json(response)
    })
}

module.exports={
    showBanner,
    addBanner,
    deleteBanner
}