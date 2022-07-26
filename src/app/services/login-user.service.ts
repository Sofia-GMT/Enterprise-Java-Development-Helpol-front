import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private readonly BASE_URL: string = 'http://localhost:8083/orders';

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}`)
  }

}
