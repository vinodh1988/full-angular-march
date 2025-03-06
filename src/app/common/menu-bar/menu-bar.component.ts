import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  status:boolean=false;
  loginmenu:string="Login"
     constructor(){
       let username = localStorage.getItem("username")
        if(username){
          this.status=true;
          this.loginmenu=username+", Logout"
        }
     }
}
