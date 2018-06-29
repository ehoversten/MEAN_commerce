import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import Routing HTTP and Form modules
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

// import COMPONENTS
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';

// import Services
import { ProductService } from "./product.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DashboardComponent,
    EditComponent,
    ProductComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
