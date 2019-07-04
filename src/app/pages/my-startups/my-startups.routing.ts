import { Routes, RouterModule } from '@angular/router';
import { MyStartupsComponent } from './my-startups.component';

const childRoutes: Routes = [
  {
    path: '',
    component: MyStartupsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
