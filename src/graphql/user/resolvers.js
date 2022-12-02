
const users = async (_, __, { fetch }) => {
    const resp = await fetch('http://localhost:3000/users');
    return resp.json();
}

const user = async (_, { id }, { fetch }) => {
    const resp = await fetch('http://localhost:3000/users/' + id);
    return resp.json();
};

export const userResolvers = {
    Query: {
        user,
        users,
    }
};
