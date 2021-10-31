export class Room {
    type!: string;
        size!: number;
        facilities!: string[];
        view!: string;
        sale!:boolean;
        reserveDates!:number[];
        prise!:number;
        smoking!:boolean;
        parking!:boolean;
        pictures!:any[];
        animals!:boolean;
        children!:{
            toSixYearsOld: any;
            fromSixToTvelve: any;
        }

constructor(type: string,
    size: number,
    facilities: string[],
    view: string,
    sale:boolean,
    reserveDates:number[],
    prise:number,
    smoking:boolean,
    parking:boolean,
    pictures:any[],
    animals:boolean,
    children:{
        toSixYearsOld: any,
        fromSixToTvelve: any,
    }){
        this.type = type
this.size = size;
this.facilities = facilities;
this.view = view;
this.sale = sale;
this.reserveDates = reserveDates;
this.prise = prise;
this.smoking = smoking;
this.parking = parking;
this.pictures = pictures;
this.animals = animals;
this.children = children;

}

}