import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// import interfaces
import { Product } from "../interfaces/Product";
import { ProductDTO } from "../dto/Product.dto";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL: string = "your backend url";

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.BASE_URL}/product/${id}`);
  }

  getProducts(): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(`${this.BASE_URL}/product`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }

  editProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/update?id=${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/product/delete?id=${id}`);
  }
}
