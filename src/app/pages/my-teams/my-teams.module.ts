import { NgModule } from '@angular/core';
import { MyTeamsComponent } from './my-teams.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './my-teams.routing';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [MyTeamsComponent]
})
export class MyTeamsModule {}
