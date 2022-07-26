import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './components/calculator-page/calculator-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/order/log-in/log-in.component';
import { OrderPageComponent } from './components/order/order-page/order-page.component';
import { RegisterComponent } from './components/order/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
