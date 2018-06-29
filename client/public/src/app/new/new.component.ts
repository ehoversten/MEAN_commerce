import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";
import { ProductService }    from "../product.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  private errors;
  private product;

  constructor(
    private productService:ProductService,
    private router: Router
    ) {
    this.product = {
      name:"",
      quantity:"",
      price:""
    }
  }

  ngOnInit() {
  }

  validate(data){
    let errors = [];

    if(data.error || data.message){
      errors.push(data.message);
      for(let error in data.error) errors.push(data.error[error].message);
      return errors;
    }else{
      return false;
    }
  }

  create() {
      console.log("Submitted new Product!");
      console.log(this.product);
      this.productService.create(this.product, (data)=> {
        this.errors = this.validate(data);
        console.log(data);
        if(!this.errors) this.router.navigateByUrl("/products");
      });

    // reset our forms with blank strings - ""
      this.product = {
        name:"",
        quantity:"",
        price:""
      }
  }

//-- reset our forms with blank strings - ""
  clear() {
    this.product = {
      name:"",
      quantity:"",
      price:""
    }
  }

}
