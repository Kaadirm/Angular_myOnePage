//import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  // HTML
  selector: 'onePage-header',
  
  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme
  imports: [CommonModule],

  // HTML5 Url
  templateUrl: './onepage-header.component.html',

  // CSS3 Url
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {
  homePage: string = "Anasayfa 44";

  //isLoıgin: boolean = true;

  // navBar adında bir obje oluşturunuz.
  // Logo(string), link(string), search, attribute oluşturuyorsunuz.
  // Link (dizi)
}
