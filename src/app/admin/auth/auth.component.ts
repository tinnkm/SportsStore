import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  public errorMessage?: string;

  constructor(private router: Router,private auth: AuthService) { }

  authenticate(form: NgForm){
    if(form.valid){
      this.auth.authenticate(this.username ,this.password).subscribe(
        res => {
          if(res){
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = "Authenticaton Failed"
        }
      )
      
    }else{
      this.errorMessage = 'Form Data Invalid';
    }
  }

  ngOnInit(): void {
  }

}
