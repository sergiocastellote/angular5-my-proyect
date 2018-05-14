import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cyclist-list',
  templateUrl: './cyclist-list.component.html',
  styleUrls: ['./cyclist-list.component.css']
})
export class CyclistListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
