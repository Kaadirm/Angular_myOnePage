import { User, userRolles } from './User';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Component
@Component({
  // Html Template
  selector: 'onePage-navbar',

  // Bu component tek başına çalışsın
  standalone: true,

  // Projeye import edilecek alan
  imports: [CommonModule],

  // Html Template
  templateUrl: './onepage-navbar.component.html',

  // Css Template
  styleUrl: './onepage-navbar.component.css'
})

// EXPORT
export class OnepageNavbarComponent {

  // Field
  homePage: string = "Anasayfa 44";

  // User Object
  User: User[] = [
    {
      id: 1,
      username: 'Hamit Mizrak',
      email: 'hamitmizrak@gmail.com',
      password: '123456',
      pictures:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      date: String(new Date().getFullYear()),
      link: 'https://admin1/',
      rolles: userRolles.admin,
    },
    {
      id: 2,
      username: 'writer1',
      email: 'writer1@gmail.com',
      password: '123456',
      pictures:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      date: String(new Date().getFullYear()),
      link: 'https://writer1/',
      rolles: userRolles.writer,
    },
    {
      id: 3,
      username: 'user1',
      email: 'huser1@gmail.com',
      password: '123456',
      pictures:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      date: String(new Date().getFullYear()),
      link: 'https://user1/',
      rolles: userRolles.user,
    },
  ];







  // navBar adında bir obje oluşturunuz.

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
    navbar: Array<any>;
    search: {
      name: string;
      placeholder: string;
      type: string;
      style: string;
    };
  } = {
      isLogin: false,
      logo: {
        logoName: 'Logo',
        logoFontAwesome: 'fa-solid fa-code-branch',
        logoPicture: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        logoLink: '#business_id',
        logoTitle: 'Title',
      },
      //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
      navbar: [
        { id: 1, name: "anasayfa", link: "/", fontAwesome: "fa-solid fa-house-chimney" },
        { id: 2, name: "about", link: "#business_id", fontAwesome: "font-2" },
        { id: 3, name: "blog", link: "#blog_id", fontAwesome: "font-3" },
        { id: 4, name: "contact", link: "#contact_id", fontAwesome: "font-4" },
      ],
      search: {
        name: "search",
        placeholder: "Arama için",
        type: "text",
        style: "btn btn-primary",
      }
    }; //navbar Object

  // Constructor

  //Method

} //end OnepageHeaderComponent
