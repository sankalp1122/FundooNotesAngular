import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token : any;
 
  constructor(private httpService: HttpService) { }
  LoginService(reqbody: any){
 
    let httpHeadersOptions= {
      headers: new HttpHeaders ({ 
        ContentType: 'application/json',
        authorization: this.token
      })
    }
  

   return this.httpService.postService("user/login", reqbody, false, httpHeadersOptions);
  }


  signUpService(reqbody: any) {

    let httpHeadersOptions= {
      headers: new HttpHeaders ({ 
        ContentType: 'application/json',
        authorization: this.token
      })
    }
  
        return this.httpService.postService("user/userSignup", reqbody, false, httpHeadersOptions);
}

}