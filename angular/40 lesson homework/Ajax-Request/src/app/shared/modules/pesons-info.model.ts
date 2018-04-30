import { PersonsData } from "./pesons-data.model";

export interface PersonsInfo{
    page?:number;
    per_page?:number;
    total?:number;
    total_pages?:number;
    data:PersonsData[];
}