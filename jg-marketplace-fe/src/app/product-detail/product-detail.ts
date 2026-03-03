import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [DecimalPipe, CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  product: any;
  selectedImage: any;
  quantity = 1;
  quantities = [1, 2];
  userId = localStorage.getItem('id');

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    this.product.images = [
      this.product.picture,
      this.product.picture,
      this.product.picture,
    ];
    this.quantities = Array.from({ length: this.product.stock }, (_, i) => i + 1);
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  addToCart() {
    if(this.product.stock < this.quantity) {
      alert('No hay suficiente stock disponible');
    } else {
      this.http.post('/api/addToCart', {
        productId: this.product.id,
        quantity: this.quantity,
        userId: this.userId
      }).subscribe(() => {
        this.router.navigate(['/cart']);
      });
    }
  }
}
