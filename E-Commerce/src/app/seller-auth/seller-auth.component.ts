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
  constructor(private seller: SellerService, private router: Router){}
  showLogin = false
  authError: string = ''
  ngOnInit(){
    this.seller.reloadSeller();
  }

  signup(data: signUp){
    console.log(data);
    this.seller.userSignup(data);
  }

  login(data: signUp){
    this.seller.userlogin(data);
    this.seller.isLoginError.subscribe((isError)=> {
      if(isError) {
        this.authError = 'Username or password is incorrect';
      }
    })
  }

  openLogin(){
    this.showLogin = true
  }

  openSignup(){
    this.showLogin = false
  }
}
