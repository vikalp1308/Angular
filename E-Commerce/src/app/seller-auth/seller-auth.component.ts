import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router){

  }
  ngOnInit(){

  }

  signup(data: signUp){
    console.log(data);
    this.seller.userSignup(data).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['seller-home']);
    })
  }
}
