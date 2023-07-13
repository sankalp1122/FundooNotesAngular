import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.scss']
})
export class DailogBoxComponent implements OnInit  {
    
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit(): void {

    console.log(this.data.datanotearr, "sankalp");
    
  }

  
}

