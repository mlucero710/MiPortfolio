import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
@Input() top:string = "";
@Input() right:string = "";
@Input() color:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
