import { field, ObjectType, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Animal model' })
export class Animal {
    @field(() => ID)
    readonly id: string;

    @Property({required: true})
    @field()
    animal: string;

    @Property({required: true})
    @field()
    emoji: string;
}

export const AnimalModel = getModelForClass(Animal);