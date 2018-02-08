import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>App Component works</p>
    <app-parent></app-parent>    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
