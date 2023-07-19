import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

 
notesarr:any = [];

  constructor(private noteService: NoteserviceService) { }
 
  ngOnInit(): void {
    this.getallnotes()
  }

  getallnotes(){
    this.noteService.getallnotes().subscribe((res:any) => {
      console.log(res);
      this.notesarr=res.data.data;
      this.notesarr=this.notesarr.filter((notes:any)=>notes.isDeleted ==false)
    })

  }

  refreshnote(e:any){
    this.getallnotes();

  }
}
