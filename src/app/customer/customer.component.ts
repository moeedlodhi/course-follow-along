import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  title:string = 'customer page';
  @Input() customer:any = {"id": '', name: '', age: ''}
  @Output() customerChanged = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(): void {
  }

  listenClick(){
    this.customerChanged.emit(this.customer)
  }

}
