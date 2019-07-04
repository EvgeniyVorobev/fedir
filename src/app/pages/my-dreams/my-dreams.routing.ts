import { Routes, RouterModule } from '@angular/router';
import { MyDreamsComponent } from './my-dreams.component';

const childRoutes: Routes = [
  {
    path: '',
    component: MyDreamsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
