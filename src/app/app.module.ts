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
import { HttpClientModule } from '@angular/common/http';
import { PrimersFromDatabaseComponent } from './components/order/primers-from-database/primers-from-database.component';
import { DesignPrimersComponent } from './components/order/design-primers/design-primers.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    CalculatorPageComponent,
    OrderPageComponent,
    SideBarComponent,
    RegisterComponent,
    LogInComponent,
    PrimersFromDatabaseComponent,
    DesignPrimersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule, 
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
