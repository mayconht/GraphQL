import { Resolver, Arg, Query, Mutation } from 'type-graphql';

import { Animal } from '../entities/animals-entity';
import { AnimalService } from '../service/animals-service';
import { AnimalInput } from '../types/animals-type';

@Resolver()
export class AnimalResolver {
    private readonly service: AnimalService;

    constructor() {
        this.service = new AnimalService();
    }

    @Query(() => [Animal], { nullable: false })
    async allAnimals() {
        return await this.service.find();
    };

    @Query(() => Animal, { nullable: false })
    async whatsAnimal() {
        return await this.service.findAllAnimalsAndPickOne();
    };

    @Mutation(() => Animal)
    async createAnimal(@Arg("data") { animal, emoji }: AnimalInput): Promise<Animal> {
        return await this.service.create({ animal, emoji });
    };

    @Mutation(() => Boolean)
    async deleteAnimal(@Arg("id") id: string) {
        return await this.service.delete(id);
    }
}