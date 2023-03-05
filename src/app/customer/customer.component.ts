import { Component, SimpleChanges, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation, AfterContentInit, ContentChild, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  title:string = 'customer page';
  @Input() test = {}
  @Input() customer:any = {"id": '', name: '', age: ''}
  @Output() customerChanged = new EventEmitter<{}>();
  @ContentChild('Projected') projected: ElementRef
  @ViewChild('random') random: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.random, 'onInit')
  }

  ngOnDestroy(): void {
    alert('onDestroy called')
  }


  listenClick(){
    this.customerChanged.emit(this.customer)
  }

}
