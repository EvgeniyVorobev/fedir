import { NgModule } from '@angular/core';
import { AddStartupComponent } from './add-startup.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './add-startup.routing';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [AddStartupComponent]
})
export class AddStartupModule {}
