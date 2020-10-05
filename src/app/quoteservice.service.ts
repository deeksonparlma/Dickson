import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import { Quote } from '../app/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {
quote : Quote;
  constructor(private http:HttpClient) {
      this.quote = new Quote("","");
   }
   quoteRequest(){
    interface ApiResponse{
      quote:string;
      author:string;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").toPromise().then(response=>{
        // console.log(response);
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = ""
        this.quote.author = ""

        reject(error)
      })
    })
    return promise
  }

}
