import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cyclist-form',
  templateUrl: './cyclist-form.component.html',
  styleUrls: ['./cyclist-form.component.css']
})
export class CyclistFormComponent implements OnInit {

  cyclist = new Cyclist();

  constructor(private cyclistService: CyclistService) { }

  ngOnInit() {
  }

  createCyclist(cyclist: Cyclist){
    this.cyclistService.addCyclist(cyclist)
    .subscribe(cyclist => {
      console.log('ciclsta creado', this.cyclist);
    }, error => console.log('error', error));
  }

}

