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
        allAnimals: [Animal]
        getAnimal(id: ID!): Animal
    }
    type Mutation{
        createAnimal(animal: String, emoji: String): Animal
        deleteAnimal(id: ID!): Animal
    }`;

export const resolvers = {
    Query: {
        wahtsAnimal: () => {
            const random = Math.floor(Math.random() * animals.length);
            return animals[random];
        },
        allAnimals: () => {
            return animals
        },
        getAnimal: (id: number) => {return animals[id]}
    },
    Mutation: {
        createAnimal: (_: any, {animal, emoji}: any) =>{
            let count = animals.length;
            const newAnimal = {
                id: count++,
                animal,
                emoji
            }
            animals.push(newAnimal);
            return newAnimal;
        },

        deleteAnimal: (_: any, {id}: any) =>{
            const animal = animals[id];
            animals.splice(id, 1);
            return animal;
        }
    }
};
