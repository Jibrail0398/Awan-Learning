import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class StorageService {

  
  key = environment.storageKey;

  constructor(
    
  ) { }

  encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }
  
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  } 
  saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }
  
  getData(key: string) {
    let data = localStorage.getItem(key) || "";
    return this.decrypt(data);
  }
  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }
  
}
