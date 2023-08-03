import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutHeader:string =  "About us";
  aboutSub:string =  "Order now and appreciate the beauty of nature";

  card: { title: string; sub: string }[] = [
    {
      title: "Large Assortment",
      sub: "we offer many different types of products with fewer variations in each category.",
    },
    {
      title: "Card 2Fast & Free Shipping<",
      sub: "4-day or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      title: "24/7 Support",
      sub: "answers to any business related inquiry 24/7 and in real-time.",
    }
  ];
 
}
