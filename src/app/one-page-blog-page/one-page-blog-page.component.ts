// Common Module
import { CommonModule } from '@angular/common';

// Core
import { Component } from '@angular/core';

@Component({
  // Html Selector Template
  selector: 'app-one-page-blog-page',

  // Bu component bağımsız çalışsın
  standalone: true,

  // Imports modules, ngIf, ngFor etc
  imports: [CommonModule],

  // Html Url
  templateUrl: './one-page-blog-page.component.html',

  // Css Url
  styleUrl: './one-page-blog-page.component.css'
})
export class OnePageBlogPageComponent {
  // Field

  // Constructor
  constructor() {

  }

  // Methods

} // end of OnePageBlogPageComponent
