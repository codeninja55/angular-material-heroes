import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggleSidenav() {
    this.navToggle.emit(true);
  }
}
