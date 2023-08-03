import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  heroText: { header: string; sub1: [string, string]; sub2: [string, string];} = {
    header: 'Buy your dream plants',
    sub1: ['50+', 'Plant Species'],
    sub2: ['100+', 'Customers'],
  };
}
