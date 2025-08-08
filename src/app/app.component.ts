import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PIMASTER';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr'); 
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateBodyHeight();
  }

  ngOnInit() {
    this.updateBodyHeight();
    
  }

  private updateBodyHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
