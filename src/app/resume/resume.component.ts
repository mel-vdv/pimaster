import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BEVET_LINK } from 'src/constantes/bevetLink';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private router : Router) {
   }

  bevetLink = BEVET_LINK;

  ngOnInit(): void {
  }
}
