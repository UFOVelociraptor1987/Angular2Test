import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'thisis',
    template: `<h2>This is {{ componentName }}</h2>
               <button (click)="ShowLog('Valera')">ZAP!</button>`,
    styles: [`h2, p {color:red;}`]
})
export class ThisIsComponent {
  @Input() componentName: string;
  @Output() onChanged = new EventEmitter<boolean>();
  ShowLog(name) {
      console.log("Hello "+name+"!");
  }
}
