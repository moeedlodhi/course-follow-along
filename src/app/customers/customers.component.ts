import { Component } from "@angular/core";


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls : ['./customers.component.scss']
})
export class CustomersComponent {
    is_disabled:boolean = false;
    customerArray:any = [];
    show_customer:boolean = false;
    newCustomer:string = 'No new customer added';
    constructor(){
    }

    addNewCustomer(event:any){
        this.newCustomer = ' '
        this.show_customer = !this.show_customer;
        this.customerArray.push({"name":"moeed", "age":28})
    }

    updateCustomer(event:any){
        console.log(event.target.value)
        this.newCustomer = event.target.value
    }

    setColor(){
        return this.show_customer===true?'red':'green'
    }
}