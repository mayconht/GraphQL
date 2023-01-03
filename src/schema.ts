
import {
    intArg,
    makeSchema,
    nonNull,
    objectType,
    stringArg,
    asNexusMethod,
  } from 'nexus'

import { DateTimeResolver } from 'graphql-scalars'
import { Context, context } from './context'
export const DateTime = asNexusMethod(DateTimeResolver, 'date')

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('animals', {
            type: 'Animal',
            resolve: (_parent, _args, ctx: Context) => {   
                return context.prisma.animal.findMany()
            },
        })
        t.nonNull.list.nonNull.field('animal', {
            type: 'Animal',
            args: {
                id: nonNull(stringArg()),
            },
            resolve: (_parent, args, ctx: Context) => {
                return context.prisma.animal.findUnique({
                    where: {
                        id: args.id,
                    },
                })
            },
        })
    },
})

const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.nonNull.field('createAnimal', {
            type: 'Animal',
            args: {
                id: (stringArg()),
                name: nonNull(stringArg()),
                type: nonNull(stringArg()),
                age: nonNull(intArg()),
                breed: nonNull(stringArg()),
            },
            resolve: (_parent, args, ctx: Context) => {
                return context.prisma.animal.create({
                    data: {
                        id: args.id,
                        name: args.name,
                        type: args.type,
                        age: args.age,
                        breed: args.breed,
                    },
                })
            },
        })
        t.nonNull.field('updateAnimal', {
            type: 'Animal',
            args: {
                id: nonNull(stringArg()),
                name: nonNull(stringArg()),
                type: nonNull(stringArg()),
                age: nonNull(intArg()),
                breed: nonNull(stringArg()),
            },
            resolve: (_parent, args, ctx: Context) => {
                return context.prisma.animal.update({
                    where: {
                        id: args.id,
                    },
                    data: {
                        name: args.name,
                        type: args.type,
                        age: args.age,
                        breed: args.breed,
                    },
                })
            },
        })
        t.nonNull.field('deleteAnimal', {
            type: 'Animal',
            args: {
                id: nonNull(stringArg()),
            },
            resolve: (_parent, args, ctx: Context) => {
                return context.prisma.animal.delete({
                    where: {
                        id: args.id,
                    },
                })
            },
        })
    },
})

const Animal = objectType({
    name: 'Animal',
    definition(t) {
        t.nonNull.string('id')
        t.nonNull.string('name')
        t.nonNull.string('type')
        t.nonNull.int('age')
        t.nonNull.string('breed')
        t.nonNull.field('createdAt', { type: 'DateTime' })
        t.nonNull.field('updatedAt', { type: 'DateTime' })
    },
})

export const schema = makeSchema({
    types: [Query, Mutation, Animal, DateTime],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    contextType: {
        module: require.resolve('./context'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
})





            
 






// import { buildSchema } from "type-graphql";
// import path from 'path';

// const schema = buildSchema({
//     resolvers: [path.join(__dirname, './animals', `**/*-resolver.*s`)],
//     validate: false,
// });

// export default schema;