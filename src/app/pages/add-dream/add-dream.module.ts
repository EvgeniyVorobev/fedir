import { NgModule } from '@angular/core';
import { AddDreamComponent } from './add-dream.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './add-dream.routing';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [AddDreamComponent]
})
export class AddDreamModule {}
