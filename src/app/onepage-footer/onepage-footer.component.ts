import { Component } from '@angular/core';

@Component({
  selector: 'onePage-footer',
  standalone: true,
  imports: [],
  templateUrl: './onepage-footer.component.html',
  styleUrl: './onepage-footer.component.css'
})
export class OnepageFooterComponent {
  // Field

  // Constructor

  constructor(){
    console.log("One Page Footer Component");
  }

  // Method
  newDateData():string{
    return String(new Date().getFullYear())
  }
}
