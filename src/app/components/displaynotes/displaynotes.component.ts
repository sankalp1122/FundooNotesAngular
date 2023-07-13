import { Component,Input, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DailogBoxComponent } from '../dailog-box/dailog-box.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  @Input() datanotearr:any;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }
 
 openDialog(note:any) {
  this.dialog.open(DailogBoxComponent, {
    data: {
      note: note
    },
  });
}
}
 
