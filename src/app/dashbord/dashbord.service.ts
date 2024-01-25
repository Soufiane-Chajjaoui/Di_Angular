import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor() { 
    console.log('DashbordService Linked With Component Himself');
  }
}
