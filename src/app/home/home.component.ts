import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bevetLink = "https://bevet.be/clinique/cabinet-veterinaire-wanze/";
  mapsLink = "https://www.google.fr/maps/place/Rue+du+Chaufour+18,+5190+Jemeppe-sur-Sambre/@50.4872172,4.6668631,14.27z/data=!4m6!3m5!1s0x47c18462844185e9:0x21861a12aef335af!8m2!3d50.4892017!4d4.6993424!16s%2Fg%2F11cpk8f0h7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
}
