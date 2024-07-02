import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.urlDomain+"/transaction/create";
  private token = this.auth.getBearerToken();

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  createTransaction(cartItems: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post(this.apiUrl, { cart_items: cartItems }, { headers });
  }

}
