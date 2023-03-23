import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside-component.component.html',
  styleUrls: ['./aside-component.component.scss'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '250px',
        height: '100%',
        opacity: 1,
        backgroundColor: 'gray'
      })),
      state('closed', style({
        width: '50px',
        height: '100%',
        opacity: 0.5,
        backgroundColor: 'gray'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AsideComponentComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
