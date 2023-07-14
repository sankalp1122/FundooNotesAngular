import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.scss'],
})
export class DailogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private noteservice : NoteserviceService) {}
 
  title: any        = this.data.note.title;
  description: any  = this.data.note.description;
  id: any           = this.data.note.id;
  
 

  ngOnInit(): void {
    console.log(this.data.note.id, 'saddddddddddddddd');

    // console.log( this.title, this.description,   " data note array objects");
  }

  updateNote() {
    const rqstData = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }
    console.log(rqstData,"skjdfksdjhfkjdbfk");
    
    this.noteservice.updateNote(rqstData).subscribe((data: any) => {
      console.log(data, 'Login // there is  data');
      // localStorage.setItem('token', data.id);
    });
  }
}



