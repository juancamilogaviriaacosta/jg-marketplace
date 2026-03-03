import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-products',
  imports: [CurrencyPipe],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css',
})
export class MainProducts {
  
  items: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data['items'];
  }
}
