import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

import { AddTeamComponent } from './add-team.component';

import { routing } from './add-team.routing';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [AddTeamComponent]
})
export class AddTeamModule {}
