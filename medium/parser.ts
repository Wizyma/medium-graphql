import * as R from 'ramda'

interface user {
  id: string,
  username: string
}

interface posts {
  payload: {
    references: {
      User: {},
      Post: {},
    },
  }
}


export const toJSON = R.pipe(R.replace('])}while(1);</x>', ''), JSON.parse)

export const assocWithUrl = (user: any, post: any) => {
  const url = `https://medium.com/@${user.username}/${post.creatorId === user.id ? post.uniqueSlug : ''}`
  return R.assoc('url', url)(post)
}

export const Posts = (user: any, post: any) => R.pipe(
R.converge(assocWithUrl.bind(null, user, post), [
  R.path(['user', 'username']),
  R.pipe(R.path(['references', 'Post']), R.values),
]))

export const Users = (users: any) => {
  const u: object[] = []
  for (const user in users) {
    u.push({ username: users[user].username, id: users[user].userId })
  }

  return u
}

export const formatData = (posts: posts) => {
  const users = Users(posts.payload.references.User)
  const ob: any = posts.payload.references.Post
  const t: object[] = []
  for (const j in ob) {
    t.push(ob[j])
  }
  return users.map((user: user, i: number) => Posts(user, t[i])(t[i]))
} 
