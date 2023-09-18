import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./page/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./page/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./page/./tabs/tabs.module').then((m) => m.TabsModule),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./page/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./page/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
