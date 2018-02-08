import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child {{name}} works!
    </p>
      <button (click)='alertme()'>Alert</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Output() onAlert: EventEmitter<string> = new EventEmitter();

  alertme() {
    console.log(this.name);
    this.onAlert.emit(this.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
