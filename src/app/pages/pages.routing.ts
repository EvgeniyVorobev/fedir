import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

export const childRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },
      {
        path: 'all-publicideas',
        loadChildren: './all-publicideas/all-publicideas.module#AllPublicideasModule'
      },
      {
        path: 'startups',
        loadChildren: './startups/startups.module#StartupsModule'
      },
      {
        path: 'my-startups',
        loadChildren: './my-startups/my-startups.module#MyStartupsModule'
      },
      {
        path: 'add-startup',
        loadChildren: './add-startup/add-startup.module#AddStartupModule'
      },
      {
        path: 'idea-comments',
        loadChildren: './idea-comments/idea-comments.module#IdeaCommentsModule'
      },
      {
        path: 'my-dreams',
        loadChildren: './my-dreams/my-dreams.module#MyDreamsModule'
      },
      {
      path: 'my-expenses',
      loadChildren: './my-expenses/my-expenses.module#MyExpensesModule'
      },
      {
        path: 'my-businesplans',
        loadChildren: './my-businesplans/my-businesplans.module#MyBusinesplansModule'
      },
      {
        path: 'add-dream',
        loadChildren: './add-dream/add-dream.module#AddDreamModule'
      },
      {
        path: 'my-teams',
        loadChildren: './my-teams/my-teams.module#MyTeamsModule'
      },
      {
        path: 'add-team',
        loadChildren: './add-team/add-team.module#AddTeamModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
