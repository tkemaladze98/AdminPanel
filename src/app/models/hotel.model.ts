export interface Room {
    type: string;
        size: number;
        facilities: string[];
        view: string;
        sale:boolean;
        reserveDates:number[];
        prise:number;
        smoking:boolean;
        parking:boolean;
        pictures:any[];
        animals:boolean;
        children:{
            toSixYearsOld: any;
            fromSixToTvelve: any;
        }
}

export enum Status {
    user = 0,
    VIP = 1,
}

export enum Stars {
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
}

export class Hotel{
    public key!:string;
    public name!:string;
    public address!:{};
    public phone!:number;
    public email!:string;
    public stars!:Stars;
    public status!:Status;
    public profilePicture!:string;
    public otherPictures!:any[];
    public rooms!:any[]

    constructor(key:string, name:string, address:{},phone:number,email:string,stars:Stars,status:Status, profilePicture:string, otherPictures:any, rooms: any[]){
     this.key = key;
     this.name = name;
     this.address = address;
     this.phone = phone;
     this.email = email;
     this.stars = stars;
     this.status = status;
     this.profilePicture = profilePicture;
     this.otherPictures = otherPictures;
     this.rooms = rooms;
    }
}