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
  quantities = [1, 2, 3, 4, 5];

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
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  addToCart() {
    console.log("Agregado al carrito", {
      product: this.product,
      quantity: this.quantity
    });
    this.http.post('/api/addToCart', {
      productId: this.product.id,
      quantity: this.quantity,
      userId: 2
    }).subscribe(() => {
      //alert('Producto agregado al carrito');
      this.router.navigate(['/cart']);
    });
  }
}
