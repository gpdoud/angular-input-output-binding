import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>Parent works</p>
    <app-child (onAlert)='changed($event)' *ngFor='let childname of childnames' [name]='childname'></app-child>
  `,
  styles: []
})
export class ParentComponent implements OnInit {

  childnames: string[] = ['Greg', 'Cindy'];

  changed(name: string) {
    console.log(name, 'changed');
  }

  constructor() { }

  ngOnInit() {
  }

}
