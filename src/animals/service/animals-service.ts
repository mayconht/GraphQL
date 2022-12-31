import {BaseService} from './base-service';
import {Animal, AnimalModel} from '../entities/animals-entity';

export class AnimalService extends BaseService<Animal>{
    constructor(){
        super();
        this.model = AnimalModel;
    }

    async findAllAnimalsAndPickOne(){
        const animals = await this.model.find({});
        const randomIndex = Math.floor(Math.random() * animals.length);
        
        return animals[randomIndex];
    }
}