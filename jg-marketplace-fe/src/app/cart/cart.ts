import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  items: any[] = [];
  shipping = 15000;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private cd: ChangeDetectorRef) {
    this.items = this.route.snapshot.data['items'].carItems;
    if(!this.items) {
      this.items = [];
    }
  }

  get subtotal() {
    return this.items.reduce(
      (sum, i) => sum + (i.product.price * i.quantity), 0
    );
  }

  get iva() {
    return this.subtotal * 0.19;
  }

  get total() {
    return this.subtotal + this.iva + this.shipping;
  }

  increase(item: any) {
    item.quantity++;
    this.setQuantity(item, item.quantity);
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.setQuantity(item, item.quantity);
    }
  }

  setQuantity(item: any, quantity: number) {
    this.http.post('/api/setQuantity', {
      id: item.id,
      quantity: quantity
    }).subscribe(() => {
      this.cd.detectChanges();
    });
  }

  remove(item: any) {
    this.http.post('/api/removeFromCart', {
      id: item.id
    }).subscribe(() => {
      this.items = [...this.items.filter(p => p.id !== item.id)];
       this.cd.detectChanges();
    });
    
  }
}
