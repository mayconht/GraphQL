import fetch from 'node-fetch';

export const context = () => {
    return {
        getUsers: (path) => {
            return fetch('http://localhost:3000/users/' + path)
        }
    }
}