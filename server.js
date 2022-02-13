const express = require('express')
const {ApolloServer } = require('apollo-server-express')
const {typeDefs} = require('./GraphQL/TypeDefs/RecordType')
const resolvers = require('./GraphQL/resolvers/Resolvers')
const DbConnection = require('./config/DB_Config')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

DbConnection()


const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.applyMiddleware({ app });
// hello



const port = process.env.PORT || 3000
app.listen(port,console.log(`server running on port: ${port}`))