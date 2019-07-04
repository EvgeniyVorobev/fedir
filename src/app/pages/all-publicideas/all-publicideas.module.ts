import { NgModule } from '@angular/core';
import { AllPublicideasComponent } from './all-publicideas.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './all-publicideas.routing';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [AllPublicideasComponent]
})
export class AllPublicideasModule {}
