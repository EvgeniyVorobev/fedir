import { Routes, RouterModule } from '@angular/router';
import { AddStartupComponent } from './add-startup.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddStartupComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
