import { Component, Input, OnInit,} from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js'

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input() title:string;
  @Input('labels') doughnutChartLabels:string[]=[];
  @Input('data') dataDonut:number[]=[];
  @Input('backgroundColor') backgroundColorDonut:string[]=[];

  constructor(){
    this.title='Sin título';
    this.doughnutChartLabels=['Label1','Label2','Label3'];
    this.dataDonut=[150,200,250];
    this.backgroundColorDonut=['#6857E6', '#009FEE', '#F02059'];
  }

  ngOnInit(): void {
    this.doughnutChartData.labels=this.doughnutChartLabels;
    this.doughnutChartData.datasets[0].data=this.dataDonut;
    this.doughnutChartData.datasets[0].backgroundColor=this.backgroundColorDonut;
  }

public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { data: this.dataDonut,
      backgroundColor: this.backgroundColorDonut },
  ],
};
public doughnutChartType: ChartType = 'doughnut';

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
