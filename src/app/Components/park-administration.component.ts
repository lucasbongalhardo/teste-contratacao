import { Component, OnInit } from '@angular/core';
import { Dinosaur } from '../Models/dinossaur.model';
import { DinosaurService } from '../Service/dinossaur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-park-administration',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './park-administration.component.html',
  styleUrls: ['./park-administration.component.css']
})
export class ParkAdministrationComponent implements OnInit {

  dinosaurs: Dinosaur[] = [];

  form: Dinosaur = this.emptyDino();
  isEditing = false;

  constructor(private dinosaurService: DinosaurService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): Promise<void> {
    return new Promise(resolve => {
      this.dinosaurService.getAll().then((data: Dinosaur[]) => {
        this.dinosaurs = data;
        resolve()
      });
    }
    );
  }

  save(): void {
    if (this.isEditing) {
      this.load();
      this.dinosaurService.update(this.form);
    } else {
      this.load().then(() => {
          this.dinosaurService.add(this.form);
        }
      );
    }

    this.cancel();

  }

  edit(dino: Dinosaur): void {
    this.form = dino;
    this.isEditing = true;
  }

  remove(id: number): void {
    this.dinosaurService.delete(id);
    this.load();
  }

  cancel(): void {
    this.form = this.emptyDino();
    this.isEditing = false;
  }

  private emptyDino(): Dinosaur {
    return {
      id: 0,
      name: '',
      species: '',
      enclosure: '',
      dangerLevel: 'Low'
    };
  }
}
