import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  title:string = 'customer page';
  @Input() customer:any

  constructor() { }

  ngOnInit(): void {
  }

}
