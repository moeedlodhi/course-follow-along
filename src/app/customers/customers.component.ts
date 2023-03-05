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
    test:any = {"name": 'Moeed', "age": 28}
    newCustomer:string = 'No new customer added';
    constructor(){
    }

    addNewCustomer(event:any){
        // this.test.age = Math.random()
        this.newCustomer = ' '
        this.show_customer = !this.show_customer;
        this.customerArray.push({"id":0, "name":"moeed", "age":Math.random()})
    }

    updateCustomer(event:any){
        console.log(event.target.value)
        this.newCustomer = event.target.value
    }

    onDelete(index) {
        this.customerArray.splice(index, 1)
    }

    setColor(){
        return this.show_customer===true?'red':'green'
    }

    listenToChanges(event:any){
        event.id +=1
        this.customerArray[-1] = event
    }
}