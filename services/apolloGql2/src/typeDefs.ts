// !WARNING: timestamp/date/uuid may need graphQL custom scalars
export const typeDefs = `#graphql
    type Ciao {
        message: String
    }
    
    type Query {
        ciao: Ciao 
    }
`
