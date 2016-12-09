import { Injectable } from '@angular/core';
import {Transaction} from "./shared/Transaction.model";

@Injectable()
export class TransactionService {

  constructor() {}

  getTransaction(index: number): Transaction {
    return new Transaction();
  }

}
