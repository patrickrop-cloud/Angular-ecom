import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public totalProduct:number=0;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.totalProduct=res.length;

    })
  }

}
