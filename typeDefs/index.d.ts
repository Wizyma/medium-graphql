export interface ServerOptions {
    readonly port?: number 
  }
  
export interface graphqlParams {
    query: string
    variables : {
      tag: string,
      limit: number,
    },
    operationName?: string,
}

export interface userParser {
    id: string,
    username: string
}

export interface postsParser {
    payload: {
        references: {
        User: {},
        Post: {},
        },
    }
}

export interface postParser {
    creatorId: string,
    uniqueSlug: string,
}

export interface resolverParams {
    tag: string,
    limit?: number
}

export interface astUtils {
    kind: any,
    value: string
}
