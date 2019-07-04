import { NgModule } from '@angular/core';
import { MyExpensesComponent } from './my-expenses.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './my-expenses.routing';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [MyExpensesComponent]
})
export class MyExpensesModule {}
