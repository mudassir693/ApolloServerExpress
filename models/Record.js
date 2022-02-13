const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({

    Country:{
        type:String
    },
    Year: {
        type:String
    },
    Area:{
        type:Number
    },
    
    TotalPopulation:{
        type:Number
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Records', RecordSchema)