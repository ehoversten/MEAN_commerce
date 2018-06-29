import { Component, OnInit }       from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService }          from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private product;
  private errors;

  constructor(
    private productService:ProductService,
    private actRoute:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.productService.findById(params.id, data => {
        console.log("/n");
        console.log("Found Product", this.product);
        console.log("***********************");
        this.product = data;
      })
    })
  }

  destroy(product) {
    this.productService.destroy(product,(data)=>{
      if(data.errors){
        // console.log("Errors:", errors);
      }else{
        this.router.navigateByUrl("/products");
      }
    });
  }

}
