import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoElement } from '../models/CryptoElement';

@Injectable()
export class CryptoElementService {
    elementApiUrl = 'http://localhost:5555/criptomoedas'
    constructor(private http: HttpClient) { }

    getCryptos(): Observable<CryptoElement[]> {
        return this.http.get<CryptoElement[]>(this.elementApiUrl);
    }
}
