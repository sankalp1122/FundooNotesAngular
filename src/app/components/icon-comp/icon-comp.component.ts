import { Component, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss']
})
export class IconCompComponent {

  @Input() noteData :any

  constructor(private noteservice:NoteserviceService) { }

  DeleteNote(){

    const reqstData = 
    { noteIdList: [this.noteData],
      isDeleted: true,
     }
     console.log(reqstData);
     
    // console.log(this.noteData,"sankalp noteData id");
    this.noteservice.deleteNote(reqstData).subscribe((res:any)=>{
      console.log(res);
      
    })
    
  }



}
