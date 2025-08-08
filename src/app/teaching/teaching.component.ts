import { Component, OnInit } from '@angular/core';
import { KEYS } from 'src/constantes/keys';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }

  resumeVisible?: number;
  enterKey:boolean = false;
  pdf?: string;
  mdpCorrect = 0;
  isManyPDF:boolean = false;
  manyPdf?: string[];


  ngOnInit(): void {
  }

  getManyPdf(pdfs: string[]) {
    this.manyPdf = pdfs;
    this.isManyPDF = true;
  }

  openCode(nomPdf: string) {
    this.pdf = nomPdf;
    this.enterKey = true;
  }

  close(modale: string) {
    switch(modale) {
      case "key": 
        this.enterKey = false;
        this.mdpCorrect = 0;
        break;
      case "manyPdf" : 
        this.isManyPDF = false;
        break;
    }

  }
  
  openPdfDirect(pdf: string) {
    window.open('assets/pdf/' + pdf + '.pdf');
  }

  openPdfCle(mdp: string) {
    this.mdpCorrect = mdp === KEYS[this.pdf!] ? 1 : 2;
    
    if (this.mdpCorrect === 1 ){
      window.open('assets/pdf/' + this.pdf + ".pdf");
    }
  }

  changeResumeVis(nb: number) { 
    console.log('click : ', nb);
    this.resumeVisible = nb;
  }

}
