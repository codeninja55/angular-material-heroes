import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent implements OnInit {
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  navToggle() {
    this.toggle.emit(true);
  }
}
