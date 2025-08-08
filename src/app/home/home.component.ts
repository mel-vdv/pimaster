import { Component, OnInit } from '@angular/core';
import { BEVET_LINK } from 'src/constantes/bevetLink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bevetLink = BEVET_LINK;
  mapsLink = "https://www.google.be/maps/place/Cabinet+v%C3%A9t%C3%A9rinaire+BeVet+-+Wanze+(Urgences+24h%2F24)/@50.5375227,5.1974351,17z/data=!3m1!4b1!4m6!3m5!1s0x47c1a9b15a958bc5:0x100779d454fffa09!8m2!3d50.5375193!4d5.20001!16s%2Fg%2F1ptwnsrb9?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
}
