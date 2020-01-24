import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    redirectTo: 'tabs/games',
    pathMatch: 'full'
  },
  {
    
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: () => import('../games/games.module').then( m => m.GamesPageModule)
          }
        ]
      },
      {
        path: 'docs',
        children: [
          {
            path: '',
            loadChildren: () => import('../docs/docs.module').then( m => m.DocsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../docs-details/docs-details.module').then( m => m.DocsDetailsPageModule),
            canActivate: [AuthGuardGuard]
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'profile-details',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
          }
        ]
      },
      {
        path: 'profile-messages',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile-messages/profile-messages.module').then( m => m.ProfileMessagesPageModule)
          }
        ]
      } 
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class TabsPageRouterModule { }
