import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudsService } from '../cruds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  f: FormGroup;
  notif= "";
  constructor(
    public crud: CrudsService,
    public router: Router,
  ) {
    this.f = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });

   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.crud.addMessage(
      { to: ["info@pimaster.be",],
      message: {
        subject: 'Nouveau message sur PIMASTER',
        text:`Message de ${this.f.get('firstname')?.value} (${this.f.get('email')?.value})  : ${this.f.get('message')?.value}`,
        html: `<h3> Nouveau message sur PIMASTER </h3> 
        <p> de la part de ${this.f.get('firstname')?.value} ${this.f.get('lastname')?.value} </p>
        <p> Email : ${this.f.get('email')?.value}</p>
        <p> Tel : ${this.f.get('phone')?.value} </p>
        <p> Message :</p> 
        <p>"${this.f.get('message')?.value}"</p>`
        
      }}
      
    )
    .then(() => {
      this.notif='VOTRE MESSAGE A ETE ENVOYE AVEC SUCCES';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 3000);
    });
  }
}
