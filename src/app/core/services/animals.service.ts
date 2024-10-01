import { Injectable } from '@angular/core';
import { ANIMALS } from './animals.mock';
import { Animal } from './animals.models';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private animals: Animal[] = ANIMALS;

  public getAnimals(): Animal[] {
    return this.animals;
  }

  public getTopAnimals(): Animal[] {
    return this.animals.sort((a, b) => b.edad - a.edad).slice(0, 4);
  }
  public enroleAnimals(animalId: number): void {
    this.animals = this.animals.filter((animal) => animal.id !== animalId);
  }

  public getAnimalById(id: number): Animal | undefined {
    return this.animals.find((animal) => animal.id === id);
  }
}
