import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }
  enterKey:boolean = false;
  pdf?: string;

  ngOnInit(): void {
  }

  openCode(nomPdf: string) {
    this.pdf = nomPdf;
    this.enterKey = true;
  }

  close() {
    this.enterKey = false;
  }

  openPdf() {
    switch(this.pdf){
      case 'pres-dap' : 
    }
    window.open('assets/pdf/' + this.pdf + ".pdf");
  }
}
