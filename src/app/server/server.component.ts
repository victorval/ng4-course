import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-server]',
  selector: '.app-server',
  template: '<p>The server component</p>',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
