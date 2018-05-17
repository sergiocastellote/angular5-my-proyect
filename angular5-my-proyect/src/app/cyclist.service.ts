import { Observable } from 'rxjs';
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

  getCyclist(): Observable<Cyclist[]> {
    return this.http.get<Cyclist[]>(this.cyclistUrl)
      .pipe(
        tap(cyclist => console.log(`listado recuperado`))
        // ,
        // catchError(this.handleError())
      )
  }

  //   getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }
  // addCyclist


  addCyclist(cyclist: Cyclist): Observable<Cyclist> {
    return this.http.post<Cyclist>(this.cyclistUrl, cyclist, httpOptions)
      .pipe(
        tap(cyclist => console.log(`ciclista añadido`))
        // ,
        // catchError(this.handleError())
      )
  }

  /** DELETE: delete the hero from the server */
  deleteCyclist(cyclist: Cyclist): Observable<Cyclist> {
    const id = cyclist.id;
    const url = this.cyclistUrl + '/' + id;

    return this.http.delete<Cyclist>(url, httpOptions).pipe(
      tap(_ => console.log(`ciclista eliminado`)),
      // catchError(this.handleError<Hero>('deleteHero'))
    );
  }

}
