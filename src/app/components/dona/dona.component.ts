import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input() title:string='Sin titulo';
  @Input('labels') doughnutChartLabels: string[]=[];
  @Input('data') dataDonut:number[]=[];
  @Input('backgroundColor') backgroundColorDonut:string[]=[];

  constructor(){
    // Valores por defecto en caso no se setee nada desde otros componentes
    this.dataDonut = [350, 450, 100];
    this.doughnutChartLabels = ['Labels1', 'Labels2', 'Labels3'];
    this.backgroundColorDonut = ['#6857E6', '#009FEE', '#F02059'];
  }
  ngOnInit(): void {
    this.doughnutChartData.datasets[0].data = this.dataDonut;
    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets[0].backgroundColor =this.backgroundColorDonut;
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.dataDonut,
        backgroundColor: this.backgroundColorDonut },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }


}
