import { Component } from '@angular/core';
import { Input} from '@angular/core';

@Component({
    selector: 'thisis',
    template: `<h2>This is {{ componentName }}</h2>`,
    styles: [`h2, p {color:red;}`]
})
export class ThisIsComponent {
  @Input() componentName: string;
}
