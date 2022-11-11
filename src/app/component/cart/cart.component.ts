import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal:number=0;
  // const products: unknown;=[];

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
  removeProduct(product:any){
    if(confirm("Do you want to delete this Product?"))
    this.cartservice.removeCartProduct(product);
    alert("The product has been successfully removed!! Continue shopping?");
    
  }
  emptyCart(){
    this.cartservice.removeAll();
  }

}
