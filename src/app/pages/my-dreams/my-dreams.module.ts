import { NgModule, OnInit } from '@angular/core';
import { MyDreamsComponent } from './my-dreams.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './my-dreams.routing';


@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [MyDreamsComponent]
})
export class MyDreamsModule implements OnInit{
  constructor(){}
  ngOnInit(){
  }
}
