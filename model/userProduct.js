const db = require('../config/connection');
const collection = require('../config/collection')
const { ObjectId } = require('mongodb');


module.exports = {
    displayProduct:()=>{
        return new Promise(async(resolve,reject)=>{
            let productDetails = await db.get().collection(collection.Product_Details).find().toArray()
            resolve(productDetails)
        })
    },

    viewProductDetails:(productId)=>{
        return new Promise((resolve,reject)=>{
          db.get().collection(collection.Product_Details).findOne({_id:ObjectId(productId)}).then((product)=>{
            resolve(product)
          })
        })
      }
}

