import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { DocsService } from 'src/app/services/docs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  headClass= 'head-white'
  isAuth: boolean
  docsContent: any[]
  trucboool= false
  
  constructor(private tabsPage: TabsPage, private docsService: DocsService, private route: ActivatedRoute, private authGuard: AuthGuardGuard) { }

  ngOnInit() {
  this.isAuth = this.authGuard.loggedIn
  this.docsContent = this.docsService.docsContent
  }
  openFirst(){
    this.tabsPage.openFirst()
  }

  logScrollStart(){
  }

  logScrollEnd(){
   }

  back(){
   
  }
}
