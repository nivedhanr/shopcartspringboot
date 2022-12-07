import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule} from '@angular/common/http';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
const myRoute:Routes=[
  {
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserregComponent,
    UserloginComponent,
    AddproductComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
