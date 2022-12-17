const db = require('../config/connection')
const collection = require('../config/collection')
const { ObjectId } = require('mongodb')


module.exports = {

    showBanner: () => {
        return new Promise(async (resolve, reject) => {
            let minibanner = await db.get().collection(collection.Mini_Banner_Details).find().toArray()
            resolve(minibanner)
        })
    },

    addToBanner: (imageId) => {
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.Mini_Banner_Details).insertOne(imageId).then((response) => {
                resolve.apply(response)
            })
        })
    },

    deleteBanner: (minibannerId) => {

        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.Mini_Banner_Details).deleteOne({ _id: ObjectId(minibannerId) }).then((response) => {
                resolve(response)
            })
        })
    }
}