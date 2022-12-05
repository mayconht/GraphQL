const post = async (_, { id }, { getPosts }) => {
  const resp = await getPosts(id);
  return resp.json();
};

const posts = async (_, __, { getPosts }) => {
  const resp = await getPosts();
  return resp.json();
};

const createPost = async (_, { input }, { createPost }) => {
  console.log("creating a post: " + input);
  // const resp = await createPost(input);
  return null
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Mutation: {
    createPost,
  },
  Post: { 
    unixTimestamp:() => {
      return new Date().getTime();
    }
  }
};