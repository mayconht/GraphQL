const user = async (_, { id }, { getUsers }) => {
    const resp = await getUsers(id)
    return resp.json();
};

const users = async (_, __, { getUsers }) => {
    const resp = await getUsers();
    return resp.json();
}

const createUser = async (_, { input }, { createUser }) => {
    console.log('creating an user: ' + input);
    // const resp = await createUser(input);

    return null;
}

export const userResolvers = {
    Query: {
        user,
        users,
    }, 
    Mutation : {
        createUser
    }
};