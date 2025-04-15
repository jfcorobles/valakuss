import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Clown } from '../shared/models/Clown';

@Injectable({
  providedIn: 'root'
})
export class ClownService {

  constructor(private http: HttpClient) { }

  getClowns(): Observable<Clown[]> {
    return this.http.get<Clown[]>('assets/data/clowns.json');
  }

  getClownById(id: string): Observable<Clown | undefined> {
    return this.getClowns().pipe(
      map(clowns => clowns.find(clown => clown.id === id))
    );
  }
}
