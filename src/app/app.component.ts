import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParkAdministrationComponent } from './Components/park-administration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParkAdministrationComponent],
  template: `<app-park-administration></app-park-administration>`
})
export class AppComponent { }
