import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.styl']
})
export class CustomersComponent implements OnInit  {

  displayedColumns: string[] = ['customer_id', 'name', 'surname', 'age', 'address', 'phone'];
  //dataSource = ELEMENT_DATA;

  ar_customers:Array<any>

  constructor(protected serv:CustomersService) { }

  ngOnInit() {
    console.log("iniciando api");
    //console.log(this.dataSource);
    //this.serv.getCustomers().subscribe(result => console.log(result.json().data));
    this.serv.getCustomers().subscribe(result => this.ar_customers=result.json().data)
    console.log(this.ar_customers);

  }

}
