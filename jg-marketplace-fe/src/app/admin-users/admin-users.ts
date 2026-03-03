import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  imports: [],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers {

  constructor(private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private http: HttpClient) {
  }

  items: any[] = [];

  ngOnInit(): void {
    this.items = this.route.snapshot.data['items'];
  }

  createUser() {
    this.router.navigate(['/user-mng']);
  }

  editUser(item: any) {
    this.router.navigate(['/user-mng', item.id]);
  }

  deleteUser(item: any) {
    this.http.delete(`/api/deleteUser/${item.id}`).subscribe(res => {
       this.items = [...this.items.filter(p => p.id !== item.id)];
       this.cd.detectChanges();
    });
  }
}
