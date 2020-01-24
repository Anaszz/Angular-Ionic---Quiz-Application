import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  
  user: User[]

  constructor(private tabsPage: TabsPage, private accountService: AccountService) { }

  ngOnInit() {
    this.user = this.accountService.users
  }
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  openFirst(){
    this.tabsPage.openFirst()
  }



}
