import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }            from "@angular/router"
import { ProductService }    from "../product.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private product;
  private errors;

  constructor(
    private productService:ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product = {
      name:"",
      quantity:"",
      price:""
    }
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.productService.findById(params.id, data => {
        this.product = data;
        console.log("Landed Edit Page, with product", data)
      })
    })
  }

  validate(data) {
    let errors = [];

    if(data.error || data.message){
      errors.push(data.message);
      for(let error in data.error) errors.push(data.error[error].message);
      return errors;
    } else {
      return false;
    }
  }

  update(product) {
    // this.product = data;
    // this.errors = this.validate(data);

    this.productService.update(this.product, (data) => {
      this.product = data;
      this.errors = this.validate(data);
      // this.errors = this.validate(data);
      this.errors = this.validate(this.product);
      // if (errors) {
      //   console.log("Update Error:" , data.errors );
      // } else {
      if (data.errors) {
        console.log("Update Error:" , data.errors );
      } else {

        this.product = data;
        this.router.navigateByUrl('/products');
      }
    });
  }

  // update(id) {
  //   this.productService.update(product, this.product).subscribe(data => {
  //     this.product = data;
  //   });
  // }


//-- reset our forms with blank strings - ""
  clear() {
    this.product = {
      name:"",
      quantity:"",
      price:""
    }
  }

}
