export class images{
    id?:number;
    url:string;
    alt:string;
    
        constructor(url:string,alt:string){
           this.url=url;
           this.alt=alt;
        }
}