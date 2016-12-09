import {Transaction} from "./Transaction.model";

export class Rule {
  xValues: String[];
  yValues: String[];

  support: number;
  confidence: number;

  constructor(x: String[], y: String[]) {
    this.xValues = x;
    this.yValues = y;

    this.support = 0;
    this.confidence = 0;
  }

  match(transactions: Transaction[], minSup: number, minConf: number): boolean {

    let sup = 0;
    let conf1 = 0;
    let conf2 = 0;

    for (let i = 0; i < transactions.length; ++i) {

      let tr = transactions[i];

      let allX = true;
      for (let j = 0; j < this.xValues.length; ++j) {

        if (tr.getItems().indexOf(this.xValues[j]) < 0) {
          allX = false;
          break;
        }
      }

      if (allX) {
        ++conf1;

        let allY = true;
        for (let k = 0; k < this.yValues.length; ++k) {

          if (tr.getItems().indexOf(this.yValues[k]) < 0) {
            allY = false;
            break;
          }
        }

        if (allY) {
          ++sup;
          ++conf2;
        }
      }

    }

    this.support = sup / transactions.length;
    this.confidence = conf2 / conf1;


    return this.support >= minSup && this.confidence >= minConf;
  }
}
