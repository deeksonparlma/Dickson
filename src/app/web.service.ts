import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }

  checkLink(link){
    interface ApiResponse{
      quote:string;
      author:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(link).toPromise().then(response=>{
        console.log(response);
        resolve()
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }
  
}
