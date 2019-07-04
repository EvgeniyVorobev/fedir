import { NgModule } from '@angular/core';
import { MyStartupsComponent } from './my-startups.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './my-startups.routing';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [MyStartupsComponent]
})
export class MyStartupsModule {}
