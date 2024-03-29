// CommonModule
import { CommonModule } from '@angular/common';

// Core
import { Component } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

@Component({
  // Html Selector Template
  selector: 'app-one-page-login',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: NgIf, ngFor etc
  imports: [CommonModule, RouterLink],

  // Html5 url
  templateUrl: './one-page-login.component.html',

  // Css3 Url
  styleUrl: './one-page-login.component.css'

})
export class OnePageLoginComponent {
  // Field

  // Constructor
  constructor() { }

  // Methods

} //end class OnePageLoginComponent
