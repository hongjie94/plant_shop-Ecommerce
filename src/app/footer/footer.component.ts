import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() fromAppText?:string;
  @Output() testEvent = new EventEmitter<string>();
  outputFromFooter:string = 'outputFromFooter';

  constructor() {
  }

  showOutput() {
    this.testEvent.emit(this.outputFromFooter);
    console.log(this.outputFromFooter);
  }

}
