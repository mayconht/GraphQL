import { Field, ObjectType, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Animal model' })
export class Animal {
    @Field(() => ID)
    readonly id: string = "";

    @Property({required: true})
    @Field()
    animal: string = "";

    @Property({required: true})
    @Field()
    emoji: string = "";

    Animal(animal: string, emoji: string){
        this.animal = animal;
        this.emoji = emoji;
    }

}

export const AnimalModel = getModelForClass(Animal);