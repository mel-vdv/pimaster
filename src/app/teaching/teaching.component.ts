import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }

  resumeVisible?: number;
  enterKey:boolean = false;

  ngOnInit(): void {
  }

  openCode() {
    this.enterKey = true;
  }

  close() {
    this.enterKey = false;
  }

  changeResumeVis(nb: number) { 
    this.resumeVisible = this.resumeVisible === nb ? 0 : nb;
  }

}
