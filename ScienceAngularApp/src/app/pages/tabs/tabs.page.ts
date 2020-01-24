import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  isHide = [false,true]
  isHide2: true

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  //méthode du drawer
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

 closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }

  hideSection(i: number){
    this.isHide[i] = !this.isHide[i]
  }


}
