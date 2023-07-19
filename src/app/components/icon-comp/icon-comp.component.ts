import { Component, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss'],
})
export class IconCompComponent {
  @Input() noteData: any;
  colorsArray:any = [ '#F38B83', '#FBBC05', '#FEF474','#CDFF90','#A6FEEB',
  '#CAF1F8','#AECAFB','#D7AFFA','#FDCFE8','#E6C8A9','#FFFFFF','#E9EBED'];

  constructor(private noteservice: NoteserviceService) {}

  DeleteNote() {
    const reqstData = { noteIdList: [this.noteData], isDeleted: true };
    console.log(reqstData);

    // console.log(this.noteData,"sankalp noteData id");
    this.noteservice.deleteNote(reqstData).subscribe((res: any) => {
      console.log(res);
    });
  }

  archivenote() {
    const reqstData = { noteIdList: [this.noteData], isArchived: true };
    console.log(reqstData);
    this.noteservice.addtoArchive(reqstData).subscribe((res: any) => {
      console.log(res);
    });
  }

  giveColor(clrData:any){
    const reqstData = {
      noteIdList: [this.noteData],
      color: clrData
    }
    console.log(reqstData,"color data it");
    
    this.noteservice.putColor(reqstData).subscribe((res)=>{
      console.log(res);
      
    })
  }


}
