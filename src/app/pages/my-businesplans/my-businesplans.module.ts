import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modal';
import { MyBusinesplansComponent } from './my-businesplans.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './my-businesplans.routing';

@NgModule({
  imports: [CommonModule, SharedModule, ModalModule, routing],
  declarations: [MyBusinesplansComponent]
})
export class MyBusinesplansModule {}
