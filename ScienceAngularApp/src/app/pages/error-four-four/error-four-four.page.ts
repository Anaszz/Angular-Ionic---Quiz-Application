import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-error-four-four',
  templateUrl: './error-four-four.page.html',
  styleUrls: ['./error-four-four.page.scss'],
})
export class ErrorFourFourPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
