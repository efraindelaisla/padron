import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Canasto } from '../interfaces/canasto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CanastaService {

  API_ENDPOINT = 'http://187.216.191.93/publicacion1/api';


  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  get(municipio: string){
    return this.httpClient.get<Canasto[]>(this.API_ENDPOINT+`/Canasta?municipio=${ municipio }`);
  }


   getAll(): Observable<any>{
      return this.httpClient.get<any>(this.API_ENDPOINT + '/Canasta');
   }



  // tslint:disable-next-line: typedef
  save(canasto: Canasto) {
    /*  --- En caso de error
      const headers = new HttpHeaders(headers:{'Content-Type': 'application/json'});
      return this.httpClient.post(url:this.API_ENDPOINT + '/canasta', canasto, options:{headers: headers});
    */
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/canasta', canasto, {headers});
  }

  // tslint:disable-next-line: typedef
  put(canasto: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + '/canasta/' + canasto.PROGRESIVO, canasto, {headers});
  }
}
