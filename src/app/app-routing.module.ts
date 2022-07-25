import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from './components/calculator-page/calculator-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

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
    path: 'order',
    component: OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
