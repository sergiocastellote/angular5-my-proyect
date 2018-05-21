import { CyclistService } from './../cyclist.service';
import { Cyclist } from './../cyclist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cyclist-form',
  templateUrl: './cyclist-form.component.html',
  styleUrls: ['./cyclist-form.component.css']
})
export class CyclistFormComponent implements OnInit {

  cyclist = new Cyclist();
  create: boolean;

  constructor(private cyclistService: CyclistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.url);
    //check if is create or edit
    this.create = this.router.url.includes('form');
    if (!this.create) {
      this.getOneCyclist();
      //hacer llamada al get one para rellenar el formulario con los datos
    }
  }

  createCyclist(cyclist: Cyclist) {
    this.cyclistService.addCyclist(cyclist)
      .subscribe(cyclist => {
        console.log('ciclsta creado', this.cyclist);
        this.cyclist = new Cyclist();
      }, error => console.log('error', error));
  }

  updateCyclist(cyclist: Cyclist) {
    this.cyclistService.updateCyclist(cyclist)
      .subscribe(cyclist => {
        console.log('ciclista modificado', this.cyclist);
        this.router.navigateByUrl('/list');
      }, error => console.log('error', error))
  }

  getOneCyclist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cyclistService.getOneCyclist(id)
      .subscribe(cyclist => {
        this.cyclist = cyclist;
      });
  }

  onSubmit(): void {
    alert('hola');
  }

}

{}