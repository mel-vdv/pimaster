import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  
  deviceInfo: any;
  isMobile?: boolean;
  isDesktop: boolean = true;
  isTablet?: boolean;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
  }

  openPdf(pdfName: string) {
    window.open('assets/pdf/' + pdfName + '.pdf');
  }

  certifHover = 0;
}
