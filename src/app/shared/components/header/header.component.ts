import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() toggleSideBarMenu: EventEmitter<any> = new EventEmitter();
  ngOnInit(){}

  toggleSideBar() {
    this.toggleSideBarMenu.emit();

    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }



}
