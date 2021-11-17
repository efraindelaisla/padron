import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  API_ENDPOINT = 'http://187.216.191.93/publicacion1/api/filtro';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  get(){
    return this.httpClient.get<string[]>(this.API_ENDPOINT + '/getmunicipio');
  }
}
