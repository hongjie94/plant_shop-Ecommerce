import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { HeroComponent } from './hero/hero.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit  {
  title: string = 'ng-project101';
  title2:string = 'ng-project101';
  HeroHeader?:string;
  @ViewChild(HeroComponent) testComp?:HeroComponent;

  childEvent?:string;
  ngAfterViewInit(): void {
    this.HeroHeader = this.testComp?.heroText.header;
  }

  getTestEvent($event: string){
    this.childEvent = $event;
    // alert($event);
  }
}

