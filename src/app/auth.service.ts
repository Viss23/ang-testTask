import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class AuthService {

  constructor(private router:Router){}
  
  isLoggedIn(){
   if (localStorage.getItem('access') == 'true'){
     return true
   }
   this.router.navigate(['/login']);
  return false
  }

  logIn( data: {username: string , password: string} ){
    if (data.username ==='admin' && data.password==='123456' ){
      localStorage.setItem('access','true')
      return true
    } else{
      localStorage.setItem('access','false')
      return false
    }
  }

  logOut(){
    localStorage.removeItem('access');
  }
}