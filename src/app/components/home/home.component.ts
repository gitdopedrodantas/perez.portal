import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private matIconRegistry:MatIconRegistry, private domSanitzer:DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
    'quality',
    this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/quality-assurance-icon.svg')
  );
  this.matIconRegistry.addSvgIcon(
    'heart',
    this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/heart-icon.svg')
  );
  this.matIconRegistry.addSvgIcon(
    'instagram',
    this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/instagram-icon.svg')
  );
   }

  ngOnInit(): void {
    
  }

}
