import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router"
import { ProductService }    from "../product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // define an Instance of Product -
  private products;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.all(data => {
      this.products = data;
    })
  }

}
