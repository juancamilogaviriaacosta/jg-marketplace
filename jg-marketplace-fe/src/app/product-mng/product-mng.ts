import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-mng',
  imports: [FormsModule],
  templateUrl: './product-mng.html',
  styleUrl: './product-mng.css',
})
export class ProductMng {

  id: number | null = null;
  product:any = {
    sku: '',
    name: '',
    description: '',
    picture: '',
    price: 0,
    stock: 0
  };

  constructor(private http: HttpClient,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id) {
      this.http.get<any[]>(`/api/getProduct/${this.id}`).subscribe(res => {
        this.product = res;
        this.cd.detectChanges();
      });
    }
  }

  saveProduct(form:any) {
    this.http.post('/api/createProduct', this.product).subscribe(res => {
      this.router.navigate(['/admin-products']);
    });
  }
}
