const {gql} = require('apollo-server-express')

const typeDefs = gql`

    type Record {
        _id:String!,
        Country:String!,
        Year:String!,
        Area:Int!,
        TotalPopulation:Int!
    }
    
    #Queries
    type Query {
        GetAllRecords: [Record!]!,
        GetRecordById(id: String!): Record!
    }

    #Mutations
     type Mutation {
        AddRecord(Country:String!,Year:String!,Area:Int!,TotalPopulation:Int!): Record!,
        UpdateRecord(id:String!, Year:String!,Area:Int!,TotalPopulation:Int!): Record!,
        DeleteRecord(id:String!): Record!
     }

    

`

module.exports = {typeDefs}