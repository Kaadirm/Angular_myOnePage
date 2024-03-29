import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Header, Main, Footer
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageProjectNameComponent } from './onepage-project-name/onepage-project-name.component';
import { OnepageNavbarComponent } from './onepage-navbar/onepage-navbar.component';

// Dikkat: Bütün Componentleri buraya eklemek zorundayız
@Component({
  // Html tag'i oluşturmak
  selector: 'app-root',
  
  // Bu componenti tek başına kullanmanıza olanak sağlar
  standalone: true,

  // Eğer Component veya Module ekliyorsanız burada olmak zorundadır.
  imports: [CommonModule, 
    RouterOutlet, 
    OnepageProjectNameComponent,
    OnepageHeaderComponent, 
    OnepageMainComponent, 
    OnepageFooterComponent,
    OnepageNavbarComponent
  ],

    // Html'de bu bcomponentte kullanacağımız html dosyası
    // template: Html kullanmadan direk html kodlarını hemplate:
  templateUrl: './app.component.html',

  // Css'de bu componentte kullanacağımız css dosyası
  styleUrl: './app.component.css'
})

// EXPORT: bu classı dışarda çağırmak istiyorsak
export class AppComponent {
  // TS(TypeScript kodlarını buraya yazabiliriz)
  name:string = "Kadir";
  surname:string = "Memişoğlu";
  projectName:string = "One Page";
  projectVersion:string = "v1.0.0"; //Semantic Version
  projectDescription:string = 'One Page Project';
  projectAuthor:string = 'Kadir Memişoğlu';
  projectLicense:string = 'MIT';
  projectRepository:string = '';
  projectKeywords:string = '';
  projectYear:number = 2024;
}
