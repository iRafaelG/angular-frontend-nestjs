import { Component, OnInit } from '@angular/core';

// import interfaces
import { Product } from "../../interfaces/Product";

// import services
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      response => this.products = response.products,
      error => console.log(error)
    )
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      response => this.getProducts(),
      error => console.log(error)
    )
  }

}
