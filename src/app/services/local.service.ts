import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  myPI=3.14;

  banks = ['SBI', 'RBL', 'PNB']

  displayBanks(){
    console.log(this.banks);
  }

  addBank(){
    this.banks.push('RBI');
    return this.banks;
  }
  constructor() { }
}
