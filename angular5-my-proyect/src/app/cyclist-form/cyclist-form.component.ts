import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cyclist-form',
  templateUrl: './cyclist-form.component.html',
  styleUrls: ['./cyclist-form.component.css']
})
export class CyclistFormComponent implements OnInit {

  cyclist = new Cyclist();
  create: boolean;

  constructor(private cyclistService: CyclistService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.create = this.router.url.includes('form');
    if(!this.create){
      //hacer llamada al get one para rellenar el formulario con los datos
    }
  }

  createCyclist(cyclist: Cyclist){
    this.cyclistService.addCyclist(cyclist)
    .subscribe(cyclist => {
      console.log('ciclsta creado', this.cyclist);
    }, error => console.log('error', error));
  }

}

