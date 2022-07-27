import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly BASE_URL: string = 'http://localhost:8080/crud';

  constructor(
    private http: HttpClient
  ) { }

  createOrder(userId: number, order: Order): Observable<Order>{
    return this.http.post<Order>(`${this.BASE_URL}/${userId}`, JSON.parse(JSON.stringify(order)))
  }
}
