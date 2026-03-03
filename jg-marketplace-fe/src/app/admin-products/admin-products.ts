import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  imports: [CurrencyPipe],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts {
  items: any[] = [];

  constructor(private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.items = this.route.snapshot.data['items'];
  }

  createProduct() {
    this.router.navigate(['/product-mng']);
  }

  editProduct(item: any) {
    this.router.navigate(['/product-mng', item.id]);
  }

  deleteProduct(item: any) {
    this.http.delete(`/api/deleteProduct/${item.id}`).subscribe(res => {
       this.items = [...this.items.filter(p => p.id !== item.id)];
       this.cd.detectChanges();
    });
  }
}
