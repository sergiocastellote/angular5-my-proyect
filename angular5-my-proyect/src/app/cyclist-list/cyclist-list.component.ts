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

  ngOnInit() {
    this.getCyclist();
  }

  getCyclist(): void {
    this.cyclistService.getCyclist()
      .subscribe(cyclist => {
        this.cyclist = cyclist;
        console.log('ciclistas', this.cyclist);
      }, error => console.log('error'));

  }

  deleteCyclist(cyclist: Cyclist): void {
    this.cyclistService.deleteCyclist(cyclist)
      .subscribe(cyclist => {
        console.log('ciclista elimando');
        this.getCyclist();
      }, error => console.log('error'));

  }
  



}


