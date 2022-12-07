import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  email=""
  password=""
  constructor(private route:Router){}
 
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)

    if (this.email=="user" && this.password=="12345") {
      this.route.navigate(['/'])

      alert("valid credential")
      
    } else {
      alert("invalid credential")
      
    }
  }
}
