import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
 token : any;
 
  constructor(private httpService: HttpService) { }


  getallnotes() {
    this.token=localStorage.getItem('token');
    let httpHeadersOptions= {
      headers: new HttpHeaders ({ 
        ContentType: 'application/json',
        authorization: this.token
      })
    }
  
    return this.httpService.getService('notes/getNotesList', true, httpHeadersOptions)
  }

  addnote(reqstData: any){
    this.token=localStorage.getItem('token');
    let httpHeadersOptions= {
      headers: new HttpHeaders ({ 
        ContentType: 'application/json',
        authorization: this.token
      })
  }
    return this.httpService.postService('notes/addNotes',reqstData,true,httpHeadersOptions);
}
}