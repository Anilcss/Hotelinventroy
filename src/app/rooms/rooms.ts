export interface Room{
    totalrooms?:number,
    availableroom?:number;
    bookedroom?:number;

}
export interface Roomlist
{
    roomno:number,
    rootype:string;
    amenities:string;
    price:number;
    photo:string;
    checkintime:Date;
    checkouttime:Date;
    Signature:string;
}