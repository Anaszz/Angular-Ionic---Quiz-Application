import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Performances',
    align: 'center',
    verticalAlign: 'middle',
    y: -50,
    style: {
      fontWeight: 'bold',
      fontSize: '13',
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
}

chartOptions2: Highcharts.Options = {

title: {
  text: null
},
xAxis: {
  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
yAxis: {
  min: 0,
  title: {
      text: 'Total fruit consumption'
  }
},
tooltip: {
  pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
  shared: true
},
plotOptions: {
  column: {
      stacking: 'percent'
  }
},
series: [{
  type: 'column',
  dataLabels: {
    enabled: false
  },
  name: 'John',
  data: [5, 3, 4, 7, 2]
},
{
  type: 'column',
  name: 'Jane',
  data: [2, 2, 3, 2, 1]
},
 {
  type: 'column',
  name: 'Joe',
  data: [3, 4, 4, 2, 5]
}]
}


chartOptions3: Highcharts.Options = {
title: {
  text: 'Combination chart'
},
xAxis: {
  categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
},
series: [{
  type: 'column',
  name: 'Jane',
  data: [3, 2, 1, 3, 4]
}, {
  type: 'column',
  name: 'John',
  data: [2, 3, 5, 7, 6]
}, {
  type: 'column',
  name: 'Joe',
  data: [4, 3, 3, 9, 0]
}, {
  type: 'spline',
  name: 'Average',
  data: [3, 2.67, 3, 6.33, 3.33],
  marker: {
      lineWidth: 2,
      lineColor: Highcharts.getOptions().colors[3],
      fillColor: 'white'
  }
}]
}}