import { Component } from '@angular/core';
// import {q}
import { QRCodeModule } from 'angularx-qrcode';
import { SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  qrCodeDownlaodLink: SafeValue = '';

  onQRCodeChange(url: string) {
    this.qrCodeDownlaodLink = url;
  }
}
