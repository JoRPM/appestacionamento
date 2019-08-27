import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dicionario } from './dicionario.model';


const URL_API = 'http://localhost:3000';

const httpOptions = { 
    headers: new HttpHeaders({'Content-Type' : 'application/json;charset=utf-8'})
};
@Injectable({ providedIn: 'root'})
export class DicionarioService {

    
    
    constructor(private http:HttpClient) {}

    listaDicionario(){
        return this.http.get<Dicionario[]>(`${URL_API}/dicionario`, httpOptions);      
    }




adcPalavra(newPalavra:Dicionario) {

        return this.http.post(`${URL_API}/dicionario`, newPalavra, httpOptions);
    }


}

