import { Observable } from 'rxjs';
import { CYCLIST } from './cyclist-mock';
import { Injectable } from '@angular/core';
import { Cyclist } from './cyclist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CyclistService {
  
  private cyclistUrl = 'api/cyclist';

  

  constructor(private http: HttpClient) { }

  getCyclist (): Observable<Cyclist[]> {
    return this.http.get<Cyclist[]>(this.cyclistUrl)
  }

  // addCyclist


  addCyclist (cyclist: Cyclist): Observable<Cyclist> {
    return this.http.post<Cyclist>(this.cyclistUrl, cyclist, httpOptions)
    
    // .pipe(
    //   tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    // );
  }
}
