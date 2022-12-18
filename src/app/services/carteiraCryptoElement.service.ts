import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoElement } from '../models/CryptoElement';
import { CarteiraCryptoElement } from '../models/CarteiraCryptoElement';
import { ClienteCrypto } from '../models/ClienteCrypto';

@Injectable()
export class CarteiraCryptoElementService {
    elementApiUrl = '/api'
    // id = 1;
    constructor(private http: HttpClient) { }

    getClienteCrypto(id: number): Observable<ClienteCrypto[]> {
        return this.http.get<ClienteCrypto[]>(`${this.elementApiUrl}/cliente/${id}/cryptos`);
    }

    compraCrypto(element: ClienteCrypto): Observable<ClienteCrypto> {
        return this.http.post<ClienteCrypto>(`${this.elementApiUrl}/cliente/compra`, element)
    }

    vendaCrypto(element: ClienteCrypto): Observable<ClienteCrypto> {
        return this.http.post<ClienteCrypto>(`${this.elementApiUrl}/cliente/venda`, element)
    }
}

// chamada antiga
// export class CarteiraCryptoElementService {
//     elementApiUrl = '/api'
//     // id = 1;
//     constructor(private http: HttpClient) { }

//     getClienteCrypto(id: number): Observable<ClienteCrypto[]> {
//         return this.http.get<ClienteCrypto[]>(`${this.elementApiUrl}/cliente/${id}/cryptos`);
//     }

//     compraCrypto(id: number, element: ClienteCrypto): Observable<ClienteCrypto> {
//         return this.http.post<ClienteCrypto>(`${this.elementApiUrl}/cliente/${id}/compra`, element)
//     }

//     vendaCrypto(id: number, element: ClienteCrypto): Observable<ClienteCrypto> {
//         return this.http.post<ClienteCrypto>(`${this.elementApiUrl}/cliente/${id}/venda`, element)
//     }
// }