import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUp, login } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new BehaviorSubject<boolean>(false);
  baseURL: string = 'http://localhost:3000'
  constructor(private http: HttpClient, private router: Router) { }
  
  userSignup(data:signUp) {
    this.http.post(`${this.baseURL}/seller`, data, {observe: 'response'}).subscribe((result:any)=>{
      if(result) {
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
    })
  }

  userlogin(data: login) {
    this.http.get(`${this.baseURL}/seller?email=${data.email}&password=${data.password}`).subscribe((result:any)=>{
      if (result && result.length > 0) {
        this.isLoginError.next(false);
        localStorage.setItem('seller', JSON.stringify(result[0]));
        this.router.navigate(['seller-home']);
      } else {
        this.isLoginError.next(true);
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
