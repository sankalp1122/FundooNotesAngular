import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
    dataArcvive :any = [];
  constructor(private noteservice:NoteserviceService) { }


  ngOnInit(): void {
   this.getallArchivenotes()
  }

  getallArchivenotes(){
    this.noteservice.getarchivenote().subscribe((res:any)=>{
      this.dataArcvive = res.data.data;
      console.log(this.dataArcvive);
    });
  }

  
}
