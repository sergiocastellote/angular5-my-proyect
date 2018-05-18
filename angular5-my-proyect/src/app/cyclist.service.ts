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

  getOneCyclist(id: number): Observable<Cyclist> {
    const url = `${this.cyclistUrl}/${id}`;
    return this.http.get<Cyclist>(url).pipe(
      tap(cyclist => console.log(`ciclista recuperado`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  addCyclist(cyclist: Cyclist): Observable<Cyclist> {
    return this.http.post<Cyclist>(this.cyclistUrl, cyclist, httpOptions)
      .pipe(
        tap(cyclist => console.log(`ciclista añadido`))
        // ,
        // catchError(this.handleError())
      )
  }

  updateCyclist(cyclist: Cyclist): Observable<Cyclist>{
    return this.http.put<Cyclist>(this.cyclistUrl, cyclist, httpOptions)
    .pipe(
      tap(cyclist => console.log('ciclista actualizado'))
    )
  }
  // updateCyclist(cyclist: Cyclist): Observable<Cyclist> {
  //   return this.http.put(this.cyclist, cyclist, httpOptions).pipe(
  //     tap(cyclist => console.log('ciclista modificado')),
  //     // catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  deleteCyclist(cyclist: Cyclist): Observable<Cyclist> {
    const id = cyclist.id;
    const url = this.cyclistUrl + '/' + id;

    return this.http.delete<Cyclist>(url, httpOptions).pipe(
      tap(cyclist => console.log(`ciclista eliminado`)),
      // catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  
}
