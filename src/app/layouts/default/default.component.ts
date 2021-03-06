import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
