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
  // Field
  //Constructor
  //Method
}
