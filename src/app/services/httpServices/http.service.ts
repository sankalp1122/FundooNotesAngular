import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  baseUrl: string = "http://fundoonotes.incubation.bridgelabz.com/api/"

  postService(url: string, reqbody: any, token:boolean, httpHeadersOptions:any){
    return this.httpClient.post(this.baseUrl+url,reqbody, token && httpHeadersOptions)
    
  }

  getService(url: string, token:boolean, httpHeadersOptions:any){
    return this.httpClient.get(this.baseUrl+url, token && httpHeadersOptions)
  }
}
