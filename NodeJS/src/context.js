import fetch from 'node-fetch';

export const context = () => {
    return {
        getUsers: (path = "") => {
            return fetch('http://localhost:3000/users/' + path)
        },
        getPosts: (path = "") => {
            return fetch('http://localhost:3000/posts/' + path)
        },
        createUser: async (input) => {
            const resp = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            return resp;
        }
    }
}