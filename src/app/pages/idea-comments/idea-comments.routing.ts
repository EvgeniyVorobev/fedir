import { Routes, RouterModule } from '@angular/router';
import { IdeaCommentsComponent } from './idea-comments.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IdeaCommentsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
