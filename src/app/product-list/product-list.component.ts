import { Component } from "@angular/core";
import { IProduct } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  public productList: Array<IProduct> = [
    {
      name: "Samsung Galaxy",
      price: 345900,
      description: "A large phone with one of the best screens"
    },
    {
      name: "Samsung Galaxy S",
      price: 699842,
      description: "A great phone with one of the best cameras"
    },
    {
      name: "Samsung A20",
      price: 29987,
      description: "This is 2px camera"
    }
  ];
  // constructor() {}

  addToCart = (item: IProduct) => {
  //   // this.productService.cart.next(item);
  console.lo
  };
}

