
const users = async (_, __, { getUsers }) => {
    const resp = await getUsers();
    return resp.json();
}

const user = async (_, { id }, { getUsers}) => {
    const resp = await getUsers(id)
    return resp.json();
};

export const userResolvers = {
    Query: {
        user,
        users,
    }
};