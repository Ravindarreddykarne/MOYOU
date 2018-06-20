import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';

@Injectable({
  providedIn: 'root'
})
export class CreatevideoService {

  constructor(private httpClient : HttpClient ) { }
 
  getData(){
    
    return this.httpClient.get('http://192.168.0.23:8085/api/v1/genres').map((res: Response) => {
      console.log(res);
      return res;
    });
  }
  getgenresData(){

    return this.httpClient.get('http://192.168.0.23:8085/api/v1/subgenres').map((res: Response) => {
      console.log(res);
      return res;
    });

  } 
  getprovidersData(){
    return this.httpClient.get('http://192.168.0.23:8085/api/v1/providers').map((res: Response) => {
      console.log(res);
      return res;
    });
  }
  getlanguagesData(){
    return this.httpClient.get('http://192.168.0.23:8085/api/v1/languages').map((res: Response) => {
      console.log(res);
      return res;
    });
  }
  getcategoryData(){
    return this.httpClient.get('http://192.168.0.23:8085/api/v1/categories').map((res: Response) => {
      console.log(res);
      return res;
    });
  }
  NewVideo(user){
    console.log(user);
    return this.httpClient.post('http://192.168.0.23:8085/api/v1/catalog',user).map((res:Response)=>{
      console.log(res);
      return res;
    })
  }
}

