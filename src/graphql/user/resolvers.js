
const users = async (_, __, {fetch}) => {
    const resp = await fetch('http://localhost:3000/users');
    return resp.json();
}

// const user = async (parent, arg, context, info) ={};

export const userResolvers = {
    Query: {
        user: () => {
            return {
                id: 1,
                name: 'MD',
                email: 'mdss@mdss.com',
                age: 30
            }
        },
        users,
    }
};
