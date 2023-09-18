import { HomeScreenMainComponent } from './page/home-screen-main/home-screen-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './page/explore/explore.component';
import { JobStressComponent } from './page/job-stress/job-stress.component';
import { RecommendedDetailComponent } from './page/recommended-detail/recommended-detail.component';
import { FilterComponent } from './page/filter/filter.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'home-screen-main',
    component: HomeScreenMainComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./page/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'explor',
    component: ExploreComponent,
  },
  {
    path: 'job-stress',
    component: JobStressComponent,
  },
  {
    path: 'recommended-detail/:problemType',
    component: RecommendedDetailComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
