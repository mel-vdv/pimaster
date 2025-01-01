import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }

  resumeVisible = 0;
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
    this.resumeVisible = nb;
  }

}
