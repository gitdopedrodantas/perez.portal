import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private matIconRegistry:MatIconRegistry, private domSanitzer:DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'whatsapp',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp-icon.svg')
    );
   }

  ngOnInit(): void {
  }

}
