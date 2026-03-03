import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-products',
  imports: [CurrencyPipe],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css',
})
export class MainProducts {
  
  items: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data['items'];
  }

  goDetails(item: any) {
    this.router.navigate(['/product-detail', item.id]);
  }
}
