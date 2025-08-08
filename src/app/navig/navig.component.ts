import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.css']
})
export class NavigComponent implements OnInit {

  constructor( 
  ) { }

  choice?: string;
  menuVis = false;

  ngOnInit(): void { 
   if (!this.choice) {
    const url = window.location.href.split('/').pop();
    this.choice = url ?? "";
   }
  }

}
