export enum Gender {
    Male = 0,
    Famale = 1,
}

export enum Status {
    User = 0,
    Admin = 1,
}

export class User{
    public key!:string;
    public userName!:string;
    public surname!:string;
    public mail!:string;
    public phone!:number;
    public password!:string;
    public age!:number;
    public gender!:Gender;
    public image!:string;
    public status!:Status;

    constructor(key:string, userName:string, surname:string, mail:string, phone:number, password:string, age:number, gender:Gender, image:string, status:Status){
        this.key = key;
        this.userName = userName;
        this.surname = surname;
        this.mail = mail;
        this.phone = phone;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.image = image;
        this.status = status;
    }
}