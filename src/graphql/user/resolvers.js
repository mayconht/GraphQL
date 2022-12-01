export const userResolver = {
    Query: {
        user: () => {
            return {
                id: 1,
                name: 'MD',
                email: 'mdss@mdss.com',
                age: 30
            }
        },
        users: () => {
            return [
                {
                    id: 1,
                name: 'MD',
                email: 'mdss@mdss.com',
                age: 30
                },
                {
                    id: 2,
                name: 'MD2',
                email: 'mdss@mdsss.com',
                age: 32
                }
            ]
        }
    }
};
