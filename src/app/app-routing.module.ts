import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartListComponent } from "./cart-list/cart-list.component";

const routes: Routes = [
  { path: "product", component: ProductListComponent },
  { path: "cart", component: CartListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
