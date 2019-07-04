import { Routes, RouterModule } from '@angular/router';
import { AddDreamComponent } from './add-dream.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddDreamComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
