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

  // getCyclist() {
  //   return CYCLIST;
  // }
  
  // getCyclist(): Cyclist[] {
  //   return CYCLIST;
  // }

  // getCyclist (): Observable<Cyclist[]> {
  //   return this.http.get<Cyclist[]>(this.cyclistUrl)
  //     .pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  getCyclist (): Observable<Cyclist[]> {
    return this.http.get<Cyclist[]>(this.cyclistUrl)
  }

}
