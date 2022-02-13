const Record = require('../../models/Record')

const resolvers = {
    Query:{
        async GetAllRecords(){
            const resp = await Record.find()
            console.log(resp)
            return resp
        },
        async GetRecordById(parent,args){
            const resp = await Record.findById(args.id)
            return resp
        }
    },

    Mutation:{
        async AddRecord(parent,args){
            const newRecord = new Record({
                Country:args.Country,
                Year:args.Year,
                Area:args.Area,
                TotalPopulation:args.TotalPopulation
            })

            const resp = await newRecord.save()
            return resp 
        },
        async UpdateRecord(parent,args){
            // ristrict that once country name is inserted then it can't update  
            const body = {
                Area:args.Area,
                Year:args.Year,
                TotalPopulation:args.TotalPopulation
            }
            console.log(body)
            const resp = await Record.findByIdAndUpdate(args.id,{$set:body},{new:true})
            return resp
        },
        async DeleteRecord(parent,args){
            const resp = await Record.findByIdAndRemove(args.id)
            return resp
        }
    }

}

module.exports = resolvers