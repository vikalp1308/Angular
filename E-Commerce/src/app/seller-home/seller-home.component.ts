import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  constructor(private product:ProductService){}
  productList: undefined | product[]
  productDeleteMsg:string | undefined
  faTrash = faTrash
  faEdit = faEdit
  ngOnInit(): void {
    this.getList()
  }

  deleteProduct(id:number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if(result){
        this.productDeleteMsg = 'Product Deleted Duccesfully'
        this.getList()
      }
    })
    setTimeout(() => {
      this.productDeleteMsg = undefined
    }, 3000);
  }

  getList(){
    this.product.productList().subscribe((result)=> {
      if(result){
        this.productList = result
      }
    })
  }
}
