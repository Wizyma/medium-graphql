const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')
// url img https://cdn-images-1.medium.com/fit/t/1600/480/

const typeDefs = `
    scalar Timestamp
    type Post {
        id: ID!
        url: String!
        title: String!
        creatorId: ID!
        detectedLanguage: String!
        firstPublishedAt: Timestamp!
        latestPublishedAt: Timestamp
        createdAt: Timestamp
        content: Content!
        virtuals: Virtuals!
    }

    type Content {
        subtitle: String
    }

    type Virtuals {
        previewImage: Image!
    }

    type Image {
        imageId: ID
    }

    type Query {
        allPosts(tag: String!, limit: Int = 10): [Post!]
        test(tag: String!, limit: Int = 10): [Post!]
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
