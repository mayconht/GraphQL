const post = async (_, { id }, { getPosts }) => {
  const resp = await getPosts(id);
  return resp.json();
};

const posts = async (_, __, { getPosts }) => {
  const resp = await getPosts();
  return resp.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: { 
    unixTimestamp:() => {
      return new Date().getTime();
    }
  }
};