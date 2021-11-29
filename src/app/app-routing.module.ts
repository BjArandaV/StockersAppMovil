import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        m => m.ResetPasswordPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },

  { path: 'camp',  loadChildren:  () =>
  import('./pages/camp/camp.module').then(m => m.CampPageModule),
   canActivate: [AuthGuard]},
   {
    path: 'update-todo/:id',
    loadChildren: () => import('./pages/update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  { path: 'camp2',  loadChildren:  () =>
  import('./pages/camp2/camp2.module').then(m => m.Camp2PageModule),
   canActivate: [AuthGuard]},
   {
    path: 'muestraoro',
    loadChildren: () =>
      import('./muestraoro/muestraoro.module').then(m => m.MuestraoroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'muestraplata',
    loadChildren: () =>
      import('./muestraplata/muestraplata.module').then(m => m.MuestraplataPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'update-todo2/:id',
    loadChildren: () => import('./pages/update-todo2/update-todo2.module').then( m => m.UpdateTodo2PageModule)
  },
  { path: 'muestraplata', loadChildren: './muestraplata/muestraplata.module#MuestraplataPageModule' },
 
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
