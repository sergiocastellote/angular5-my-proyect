import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {

  cyclist: Cyclist[];

  constructor(private cyclistService: CyclistService) { }

  // getCyclist(): void {
  //   this.cyclistService.getCyclist();
  //   .subscribe(cyclist => {
  //     this.cyclist = cyclist;
  //     console.log('lista de ciclistas' + this.cyclist);
  //   });
  // }

  getCyclist(): void {
    this.cyclist = this.cyclistService.getCyclist();
    console.log('ciclistas', this.cyclist);
  }



  ngOnInit() {
    this.getCyclist();
  }

}


