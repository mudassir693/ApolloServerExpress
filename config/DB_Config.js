const mongoose = require('mongoose')

const connectDb = ()=>{
    mongoose.connect(process.env.Mongo_URI)
        .then(console.log('DB connected Sucessfully'))
        .catch(error=>{
            console.log(error)
        })
}

module.exports = connectDb