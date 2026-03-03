import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private route: ActivatedRoute) {
    this.items = this.route.snapshot.data['items'].carItems;
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
  }

  decrease(item: any) {
    if (item.quantity > 1)
      item.quantity--;
  }

  remove(item: any) {
    this.items =
      this.items.filter(i => i.id !== item.id);
  }
}
