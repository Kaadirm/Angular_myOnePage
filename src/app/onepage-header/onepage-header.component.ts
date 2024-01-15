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

  // navBar adında bir obje oluşturunuz.
  // Logo(string), link(string), search, attribute oluşturuyorsunuz.
  // Link (dizi)
  // navBar:{} = {}
  navBar: {
    isLogin: boolean;
    // logo: string, (fontAwesome,picture,link,title)
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar:Array<any>;
    search:{
      name: string;
      placeholder: string;
      type: string;
      style:string;
    };
  } = {
    isLogin: true,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
        //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar:[
      {id:1, name:"Anasayfa", link:"/", fontAwesome:"fa-solid fa-house-chimney"},
      {id:2, name:"AboutMe", link:"/about-me", fontAwesome:"font-2"},
      {id:3, name:"Blog", link:"/blog", fontAwesome:"font-3"},
      {id:4, name:"Contact", link:"/contact", fontAwesome:"font-4"},
    ],
    search: {
      name: "Search",
      placeholder: "Search",
      type: "text",
      style: "btn"
    }
  }; //navbar Object
} //end OnepageHeaderComponent
