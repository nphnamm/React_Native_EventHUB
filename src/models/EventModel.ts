export interface EventModel{
    author:string;
    date:number;
    description:string;
    endAt: number;
    imageUrl:string;
    location: Location;
    startAt:number;
    title:string;
    users: string[];
}
export interface Location{
    address: string;
    title:string;
}