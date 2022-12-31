const animals = [
    {
        animal: 'dog',
        emoji: '🐶'
    },
    {
        animal: 'cat',
        emoji: '🐱'
    },
    {
        animal: 'pig',
        emoji: '🐷'
    },
    {
        animal: 'cow',
        emoji: '🐮'
    },
    {
        animal: 'chicken',
        emoji: '🐔'
    }];


export const typeDefs = `
    type Animal{
        animal: String!
        emoji: String!
    }
    type Query{
        wahtsAnimal: Animal
        }
 `;

export const resolvers = {
    Query: {
        wahtsAnimal: () => {
            const random = Math.floor(Math.random() * animals.length);
            return animals[random];
        }
    }
};
