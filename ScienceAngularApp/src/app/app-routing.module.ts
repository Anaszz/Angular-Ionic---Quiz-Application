import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'game-prehistoire',
    loadChildren: () => import('./pages/game-prehistoire/game-prehistoire.module').then( m => m.GamePrehistoirePageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/error-four-four/error-four-four.module').then( m => m.ErrorFourFourPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },
  //path wildcard qui permet pour chaque erreur de lien de rediriger vers la page d'erreur 404
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
