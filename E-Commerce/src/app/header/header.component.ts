import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string = 'default'
  sellerName: string = ""
  constructor(private router: Router){}
  ngOnInit(): void {
      this.router.events.subscribe((res: any)=> {
        if(res.url){
          if(localStorage.getItem('seller') && res.url.includes('seller')){
            let sellerData = localStorage.getItem('seller')
            this.sellerName = sellerData && JSON.parse(sellerData).name
            this.menuType = 'seller'
          } else {
            this.menuType = 'default'
          }
        }
      })
  }

  logout(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
  }
}
