import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('seller')) {
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
}