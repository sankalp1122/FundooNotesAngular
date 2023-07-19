import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-trashcomp',
  templateUrl: './trashcomp.component.html',
  styleUrls: ['./trashcomp.component.scss'],
})
export class TrashcompComponent implements OnInit {
  dataTrash: any;
  notesarr:any;
  constructor(private noteService: NoteserviceService) {}

  ngOnInit(): void {
    this.getTrashNotesall();
  }

  getTrashNotesall() {
    
    this.noteService.gettrashNotes().subscribe((data:any) => {
      this.dataTrash = data.data.data;
    console.log(this.dataTrash, 'trash data console ...');

    });
  }
}
