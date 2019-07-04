import { Routes, RouterModule } from '@angular/router';
import { MyBusinesplansComponent } from './my-businesplans.component';

const childRoutes: Routes = [
  {
    path: '',
    component: MyBusinesplansComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
