import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  email=""
  password=""
  constructor(private api:ApiService,private route:Router){}
 
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid credential")
        } else {
          alert("Valid credential")
          this.route.navigate(['/cardview'])
          
        }
      }
    )

    

      
  }
}
