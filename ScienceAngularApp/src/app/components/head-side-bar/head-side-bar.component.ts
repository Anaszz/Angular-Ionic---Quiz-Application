import { Component, OnInit } from '@angular/core';
import { TabsPage } from 'src/app/pages/tabs/tabs.page';

@Component({
  selector: 'app-head-side-bar',
  templateUrl: './head-side-bar.component.html',
  styleUrls: ['./head-side-bar.component.scss'],
})
export class HeadSideBarComponent implements OnInit {

  constructor(private tabsPage: TabsPage) { }

  ngOnInit() {}

  
  openFirst(){
    this.tabsPage.openFirst()
  }
}

