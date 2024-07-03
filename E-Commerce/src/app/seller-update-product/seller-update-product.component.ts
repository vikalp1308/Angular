import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  productData: undefined | product
  updateProductMsg: string|undefined
  constructor(private router:ActivatedRoute, private product: ProductService){}

  ngOnInit(){
    const productId = this.router.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((result: any) => {
      this.productData = result
    })
  }

  submit(data:product){
    if(this.productData){
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result:any) => {
      if(result){
        this.updateProductMsg = 'Product updated succesfully'
      }
    })
    setTimeout(()=>{
      this.updateProductMsg = undefined
    }, 3000)
  }
}
