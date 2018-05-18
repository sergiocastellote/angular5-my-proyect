import { element } from 'protractor';
import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {

  cyclist: Cyclist[];
  name: string;
  cyclistObj: Cyclist;

  constructor(private cyclistService: CyclistService, private router: Router) { }

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

  searchCyclist(name): void {
    let filteredList = [];
    this.cyclist.forEach(function (obj) {
      if (obj.name === name) {
        filteredList.push(obj);
      }
    })
    this.cyclist = filteredList;
  }

  deleteCyclist(cyclist: Cyclist): void {
    this.cyclistService.deleteCyclist(cyclist)
      .subscribe(cyclist => {
        console.log('ciclista elimando');
        this.getCyclist();
      }, error => console.log('error'));

  }

  updateCyclist(cyclist: Cyclist): void {
    this.router.navigateByUrl('/detail/' + cyclist.id);
  }

  cleanSearch(): void{
    this.getCyclist();
  }




}


