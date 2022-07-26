import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CalculatorPageComponent } from './components/calculator-page/calculator-page.component';
import { OrderPageComponent } from './components/order/order-page/order-page.component';
import { SideBarComponent } from './components/order/side-bar/side-bar.component';
import { RegisterComponent } from './components/order/register/register.component';
import { LogInComponent } from './components/order/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CalculatorPageComponent,
    OrderPageComponent,
    SideBarComponent,
    RegisterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
