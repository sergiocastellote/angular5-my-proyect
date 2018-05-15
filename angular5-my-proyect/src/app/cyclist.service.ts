import { CYCLIST } from './cyclist-mock';
import { Injectable } from '@angular/core';


@Injectable()
export class CyclistService {

  constructor() { }

  getCyclist() {
    return CYCLIST;
  }
  

}
