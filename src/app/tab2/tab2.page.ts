import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 3000;

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      
      data: {        
        datasets: [{
          
          data: [{
                x: 0,
                y: -40
            },
            {
                x: 45,
                y: 0
            },{
                x: 80,
                y: 0
            }, {              
                x: 120,
                y: 4
            },{
                x: 160,
                y: 0
            }, {
                x: 20000,
                y: 0
            }],
          backgroundColor: 'transparent', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1,
          label:"Out 1",
          pointBorderColor: 'transparent'
        }]
      },
      options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltip: {
          intersect: false
        },
        scales: {
          yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'db',
            },
            type: 'linear',
            position: 'left',
            ticks: {
                stepSize: 2,
                min: -40, //minimum tick
                max: 20, //maximum tick                
            }
        }],
          xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Freq- (Hz)',
            },
            type: 'logarithmic',
            position: 'left',
            ticks: {
                min: 10, //minimum tick
                max: 20000, //maximum tick
                callback: function (value, index, values) {
                    let nummer = Number(value.toString())
                    if(nummer === 10 || nummer === 100 || nummer  === 1000 || nummer ===10000)
                      return nummer;//pass tick values as a string into Number function
                    else return "";
                }
            },
            afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
                chartObj.ticks = [];
                chartObj.ticks.push(10);
                chartObj.ticks.push(10);
                chartObj.ticks.push(20);
                chartObj.ticks.push(30);
                chartObj.ticks.push(40);
                chartObj.ticks.push(50);
                chartObj.ticks.push(60);
                chartObj.ticks.push(70);
                chartObj.ticks.push(80);
                chartObj.ticks.push(90);
                chartObj.ticks.push(100);
                chartObj.ticks.push(100);
                chartObj.ticks.push(200);
                chartObj.ticks.push(300);
                chartObj.ticks.push(400);
                chartObj.ticks.push(500);
                chartObj.ticks.push(600);
                chartObj.ticks.push(700);
                chartObj.ticks.push(800);
                chartObj.ticks.push(900);
                chartObj.ticks.push(1000);
                chartObj.ticks.push(1000);
                chartObj.ticks.push(2000);
                chartObj.ticks.push(3000);
                chartObj.ticks.push(4000);
                chartObj.ticks.push(5000);
                chartObj.ticks.push(6000);
                chartObj.ticks.push(7000);
                chartObj.ticks.push(8000);
                chartObj.ticks.push(9000);
                chartObj.ticks.push(10000);
                chartObj.ticks.push(10000);
                chartObj.ticks.push(20000);
            }
        }]
        }
      }
    });
  }


}
