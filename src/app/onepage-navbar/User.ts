// User

export class User {
    // Field
    id: number;
    username: string;
    email: string;
    password: string;
    pictures: string;
    date: string;
    link: string;
    // rolles: dizi

    // Constructor
    constructor(
        id: number, 
        username: string, 
        email: string, 
        password: string, 
        pictures: string,
        date: string,
        link: string
        ){
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
            this.pictures = pictures;
            this.date = date;
            this.link = link;
        }

    // Methods
}

// rolles: Enum (admin, writer, user)
// rolles: Dizi
// Person nesnesinden abstract
