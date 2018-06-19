import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor() { }

  get(route:string) {
    let c = new CmsContent();

    c.title = "title";
    c.description = "descxripton";
    c.content = "content";

    return new CmsContent();
  }
}


export class CmsContent {

  public id:number;
  public title:string;
  public description:string;
  public content:string;

  constructor() { }

  
}

export const cms_routes = {
  'home': 'home',
  'home-banner': 'home-banner',
}


