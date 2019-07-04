import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudService } from './crud.service'; //<-this is previously manually created services - dont needed anymore!!
import { HttpClientModule } from '@angular/common/http';
import { SDKBrowserModule } from './shared/sdk';
import { PivotService } from './shared/services/pivot.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing,
    HttpClientModule,
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CrudService,
    PivotService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
