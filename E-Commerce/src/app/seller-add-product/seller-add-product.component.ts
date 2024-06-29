import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  constructor(private product: ProductService){}
  addProductMsg: string|undefined
  ngOnInit(): void {
      
  }

  submit(data:product){
    this.product.addProduct(data).subscribe((result:any)=>{
      if(result){
        this.addProductMsg = 'Product is added succesfully'
      }
    })
    setTimeout(()=>{
      this.addProductMsg = undefined
    }, 3000)
  }
}
