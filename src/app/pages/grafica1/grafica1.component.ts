import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[]=[
    'Download Sales',
    'Pene',
    'Mail-Order Sales',
  ]

  public data1 = [350, 600, 100];

  backgroundColor1 = ['#6857E6', '#009FEE', '#F02059'];

}
