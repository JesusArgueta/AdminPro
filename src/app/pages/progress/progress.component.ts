import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

  progreso1: number = 25;
  progreso2: number = 35;

  getProgreso1():string{
    return `${this.progreso1}%`;
  }

  getProgreso2():string{
    return `${this.progreso2}%`;
  }

}
