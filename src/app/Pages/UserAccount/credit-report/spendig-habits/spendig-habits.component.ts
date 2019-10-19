import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spendig-habits',
  templateUrl: './spendig-habits.component.html',
  styleUrls: ['./spendig-habits.component.scss']
})
export class SpendigHabitsComponent implements OnInit {


  spendings: { category: string, amount: string }[] = [

    {category: 'Supermarkets', amount: '€ 4,230'},
    {category: 'Hotels/Restaurants', amount: '€ 4,000'},
    {category: 'Retail Stores', amount: '€ 3,135'},
    {category: 'Government/Utilities', amount: '€ 2,200'},
    {category: 'Other', amount: '€ 2,100'},
    {category: 'Pharmacies/Health', amount: '€ 800'},
    {category: 'Fuel', amount: '€ 320'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
