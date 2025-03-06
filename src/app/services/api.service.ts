import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any>{
    return this.http.get('http://localhost:4500/services');
  }

  addEnquiry(data:any):Observable<any>{
    return this.http.post('http://localhost:4500/enquiries', data);
  }

  getEnquiries():Observable<any>{
    return this.http.get('http://localhost:4500/enquiries');
  }
}
