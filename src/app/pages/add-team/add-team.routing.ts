import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './add-team.component';

const childRoutes: Routes = [
  {
    path: '',
    component: AddTeamComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
