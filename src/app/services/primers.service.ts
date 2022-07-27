import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Primers } from '../models/primers.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PrimersService {

  private readonly BASE_URL: string = 'http://localhost:8082/primers';

  constructor(
    private http: HttpClient
  ) { }

  getAllPrimers(): Observable<Primers[]>{
    return this.http.get<Primers[]>(`${this.BASE_URL}`)
  }

  saveNewPair(primers: Primers): Observable<Primers>{
    return this.http.post<Primers>(`${this.BASE_URL}`, JSON.parse(JSON.stringify(primers)))
  }

  getPrimersByIdd
  
}
