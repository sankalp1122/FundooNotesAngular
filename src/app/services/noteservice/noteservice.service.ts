import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteserviceService {
  token: any;

  constructor(private httpService: HttpService) { }

  getallnotes() {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };

    return this.httpService.getService(
      'notes/getNotesList',
      true,
      httpHeadersOptions
    );
  }

  addnote(reqstData: any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/addNotes',
      reqstData,
      true,
      httpHeadersOptions
    );
  }

  deleteNote(reqstData: any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/trashNotes',
      reqstData,
      true,
      httpHeadersOptions
    );
  }

  updateNote(reqstData: any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/updateNotes',
      reqstData,
      true,
      httpHeadersOptions
    );
  }

  gettrashNotes() {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.getService(
      'notes/getTrashNotesList',
      true,
      httpHeadersOptions
    );
  }

  addtoArchive(reqstData: any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.postService(
      'notes/archiveNotes',
      reqstData,
      true,
      httpHeadersOptions
    );
  }
  getarchivenote() {
    this.token = localStorage.getItem('token');
    let httpHeadersOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.getService(
      'notes/getArchiveNotesList',
      true,
      httpHeadersOptions
    );
  }
}
