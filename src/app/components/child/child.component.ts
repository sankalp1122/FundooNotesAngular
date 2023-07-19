import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
 
  
  @Input() data:any;
  @Output() fireOut: any= new EventEmitter<any>();

  constructor() {}

 
  ngOnInit(): void {
    console.log(this.data);
    // this.send();
   }

  send(){
    this.data ="hello this is child data";
    this.fireOut.emit(this.data);
  }

}
