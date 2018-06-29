import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  create(product,cb){
    this.http.post("/api/products",product)
    .subscribe( data => cb(data) );
  }

  all(cb){
    this.http.get("/api/products")
    .subscribe( data => cb(data) );
  }

  findById(id,cb){
    this.http.get("/api/products/"+id )
    .subscribe( data => cb(data) );
  }

  destroy(product,cb){
    this.http.delete("/api/products/"+product._id )
    .subscribe( data => cb(data) );
  }

  update(product,cb){
    this.http.put("/api/products/"+product._id, product)
    .subscribe( data => cb(data) );
  }

}
