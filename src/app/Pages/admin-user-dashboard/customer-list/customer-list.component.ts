import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


export interface Customer {
  no: number;
  name: string;
  email: string;
  date: Date;
  status: 'Pending' | 'Completed';
}

const ELEMENT_DATA: Customer[] = [
    {
      no: 1,
      name: 'Constnatinos Christoforou',
      email: 'constantinos@gmail.com',
      date: moment().subtract(2, 'd').toDate(),
      status: 'Pending'
    },
    {
      no: 2,
      name: 'Robert M. Williams',
      email: 'robert@gmail.com',
      date: moment().subtract(3, 'd').toDate(),
      status: 'Pending'
    },
    {
      no: 3,
      name: 'Kevin M. Donoghue',
      email: 'kevin@gmail.com',
      date: moment().subtract(15, 'd').toDate(),
      status: 'Completed'
    },
    {
      no: 4,
      name: 'James D. Martin',
      email: 'james@gmail.com',
      date: moment().subtract(20, 'd').toDate(),
      status: 'Completed'
    },
    {
      no: 5,
      name: 'Heather C. Perez',
      email: 'heather@gmail.com',
      date: moment().subtract(25, 'd').toDate(),
      status: 'Completed'
    }, {
      no: 6,
      name: 'Gregory R. Craig',
      email: 'gregory@gmail.com',
      date: moment().subtract(30, 'd').toDate(),
      status: 'Completed'
    },


  ]
;


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'email', 'date', 'status', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
