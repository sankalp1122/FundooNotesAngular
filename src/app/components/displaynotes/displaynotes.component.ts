import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
 
 @Input() datanotearr:any;
 
 ngOnInit(): void {

  console.log(this.datanotearr, "display sankalp");
  
 }
 
}
