import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  geTtoken(){
    return localStorage.getItem('token');
    // console.log();
    
  }
}
