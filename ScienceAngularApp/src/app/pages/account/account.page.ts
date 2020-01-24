import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AuthService } from 'src/app/services/auth.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private tabsPage: TabsPage,private authService: AuthService) { }

  ngOnInit() {
  }

  openFirst(){
    this.tabsPage.openFirst()
  }
  
  changeAuth(){
    this.authService.changeAuth()
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    title:{
      text: null
  },
  legend:{
  enabled: false
  },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
   series: [{
    data: [{
      name: 'Chrome',
      y: 61.41
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Other',
      y: 7.05
    }],
    type: 'pie',

  }]
  };
}
