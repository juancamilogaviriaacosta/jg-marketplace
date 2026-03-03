import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-mng',
  imports: [FormsModule],
  templateUrl: './user-mng.html',
  styleUrl: './user-mng.css',
})
export class UserMng {
  id: number | null = null;
  user: any = {
    name: '',
    username: '',
    password: '',
    role: ''
  };

  constructor(private http: HttpClient,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id) {
      this.http.get<any[]>(`/api/getUser/${this.id}`).subscribe(res => {
        this.user = res;
        this.cd.detectChanges();
      });
    }
  }

  saveUser(form:any) {
    this.http.post('/api/createUser', this.user).subscribe(res => {
      this.router.navigate(['/admin-users']);
    });
  }
}
