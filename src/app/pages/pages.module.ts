import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { SelectModule } from 'ng2-select';

/* components */
import { PagesComponent } from './pages.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        SelectModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        SignUpComponent,
        IndexComponent
    ]
})
export class PagesModule { }
