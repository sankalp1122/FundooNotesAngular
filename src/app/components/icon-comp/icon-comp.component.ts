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
  colorsArray:any = [ '#F38B83', '#FBBC05', '#FEF474' ];

// { code: '#F38B83' },
// { code: '#FBBC05' },
// { code: '#FEF474' },
// { code: '#CDFF90' },
// { code: '#A6FEEB' },
// { code: '#CAF1F8' },
// { code: '#AECAFB' },
// { code: '#D7AFFA' },
// { code: '#FDCFE8' },
// { code: '#E6C8A9' },
// { code: '#FFFFFF' },
// { code: '#E9EBED' }

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
    return this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
  }
}
