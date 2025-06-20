import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/?page=${page}`);
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }
}