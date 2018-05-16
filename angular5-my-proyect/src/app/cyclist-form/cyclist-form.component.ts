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
      this.cyclist = cyclist;
      console.log('ciclistas', this.cyclist);
    });
  }

}


// add(name: string): void {
//   name = name.trim();
//   if (!name) { return; }
//   this.heroService.addHero({ name } as Hero)
//     .subscribe(hero => {
//       this.heroes.push(hero);
//     });
// }
