import { NavigComponent } from './../navig/navig.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private router : Router) {
   }

  bevetLink = "https://bevet.be/clinique/cabinet-veterinaire-wanze/";

  ngOnInit(): void {
  }
}
