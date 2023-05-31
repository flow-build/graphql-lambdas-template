// !WARNING: timestamp/date/uuid may need graphQL custom scalars
export const typeDefs = `#graphql
    type Hello {
        message: String
    }
    
    type Query {
        hello: Hello 
    }
`
