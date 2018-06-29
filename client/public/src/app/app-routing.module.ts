import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import COMPONENTS
import { ListComponent }    from './list/list.component';
import { NewComponent }     from "./new/new.component";
import { EditComponent }    from "./edit/edit.component";
import { ProductComponent } from "./product/product.component";
// import { DetailComponent }  from "./detail/detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: "products", component: ListComponent },
  { path: "products/new", component: NewComponent },
  { path: "products/:id", component: ProductComponent },
  { path: "products/:id/edit", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
