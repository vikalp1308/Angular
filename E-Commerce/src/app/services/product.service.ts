import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:3000/product'
  constructor(private http: HttpClient) { }

  addProduct(data:product) {
    return this.http.post(this.baseURL, data);
  }

  productList(){
    return this.http.get<product[]>(this.baseURL);
  }
  
  deleteProduct(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
