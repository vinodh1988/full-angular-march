import { Component } from '@angular/core';
import { service } from '../../model/service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  serviceslist:service[] = []

  constructor(private api:ApiService, private router:Router){
  
  }

  ngOnInit(){ 
      this.api.getServices().subscribe({
          next:(result:service[])=>this.serviceslist = result,
          error:(error)=>console.log(error)
      });

  }
  onServiceClick(id:string){
    const selectedService = 
    this.serviceslist.find(service => service.id === id);
    if (selectedService) {
      this.router.navigate(['/services', id], { state: { title: selectedService.title } });
    }
     
  }
}
