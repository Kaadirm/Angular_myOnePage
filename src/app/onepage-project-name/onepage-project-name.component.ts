import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'onePage-projectName',
  standalone: true,
  imports: [
    CommonModule,
  ],
    // HTML5 Url
  // templateUrl: "./onepage-project-name.component.html",
  template: `
  <div>
  Project Name: <span class="text-primary"> One Page</span
  >
  <br>
  Merhabalar Kadir - Memişoğlu
  </div>
  <hr>
  `,
  styleUrl: './onepage-project-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnepageProjectNameComponent { }
