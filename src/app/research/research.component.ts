import { Component, OnInit } from '@angular/core';
import { KEYS } from 'src/constantes/keys';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }
  enterKey:boolean = false;
  pdf?: string;
  mdpCorrect = 0;

  ngOnInit(): void {
  }

  openCode(nomPdf: string) {
    this.pdf = nomPdf;
    this.enterKey = true;
  }

  close() {
    this.enterKey = false;
    this.mdpCorrect = 0;
  }

  openPdfDirect(pdf: string) {
    window.open('assets/pdf/' + pdf + '.pdf');
  }

  openPdfCle(mdp: string) {
    this.mdpCorrect = mdp === KEYS[this.pdf!] ? 1 : 2;
    
    if (this.mdpCorrect === 1 ){
      window.open('assets/pdf/' + this.pdf + ".pdf");
      this.enterKey = false;
    }
  }
}
