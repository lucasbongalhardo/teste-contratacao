import { Injectable } from '@angular/core';
import { Dinosaur } from '../Models/dinossaur.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {

  constructor() { }

  private dinosaurs: Dinosaur[] = [
    {
      id: 1,
      name: 'Rex',
      species: 'Tyrannosaurus Rex',
      enclosure: 'Sector A',
      dangerLevel: 'High'
    },
    {
      id: 2,
      name: 'Blue',
      species: 'Velociraptor',
      enclosure: 'Sector B',
      dangerLevel: 'High'
    },
    {
      id: 3,
      name: 'Tiny',
      species: 'Triceratops',
      enclosure: 'Sector C',
      dangerLevel: 'Medium'
    },
    {
      id: 4,
      name: 'Longneck',
      species: 'Brachiosaurus',
      enclosure: 'Sector D',
      dangerLevel: 'Low'
    }
  ];

  getAll(): Observable<Dinosaur[]> {
    return of([...this.dinosaurs]).pipe(delay(500));
  }

  add(dino: Dinosaur): void {
    dino.id = Date.now();
    this.dinosaurs.push(dino);
  }

  update(updated: Dinosaur): void {
    const updateDino = () => {
      const index = this.dinosaurs.findIndex(d => d.id === updated.id);
      if (index > 0) {
        this.dinosaurs[index] = { ...updated };
      }
    }
    updateDino();
  }

  delete(id: number): void {
    this.dinosaurs = this.dinosaurs.filter(d => d.id !== id);
  }
}
