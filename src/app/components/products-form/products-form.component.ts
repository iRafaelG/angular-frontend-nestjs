import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

// import interfaces
import { Product } from "../../interfaces/Product";

// import services
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product: Product = {
    name: "",
    description: "",
    price: 0,
    imageUrl: ""
  }

  editing: boolean = false;

  constructor(private productService: ProductsService,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    let { id } = this.activedRoute.snapshot.params;
    if(id) {
      this.productService.getProduct(id).subscribe(
        response => {
          this.product = { ...response.product };
          this.editing = !this.editing;
        },
        error => console.log(error)
      )
    }
  }

  submitForm(): void {
    this.productService.createProduct(this.product).subscribe(
      response => this.router.navigate(['/']),
      error => console.log(error)
    )
  }

  updateProduct(): void {
    this.productService.editProduct(this.product._id, this.product).subscribe(
      response => this.router.navigate(['/']),
      error => console.log(error)
    )
  }

}
