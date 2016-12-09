import {Component} from "@angular/core";
import {Transaction, array} from "./shared/Transaction.model";

@Component({
  moduleId: module.id,
  selector: 'association-rules-app',
  templateUrl: 'association-rules.component.html',
  styleUrls: ['association-rules.component.css']
})
export class AssociationRulesAppComponent {
  title = 'Association rules';
  ITEMS: String[] = array;
  transactions: Transaction[];

  sup: number = .0;
  conf: number = .0;
  xVal: String = "Bread";
  yVal: String = "Milk";

  genRange: number = 10;

  constructor() {

    this.transactions = Transaction.randomize(10);
  }

  generate(): void {
    this.transactions = Transaction.randomize(this.genRange);
    this.calculate();
  }

  calculate(): void {

    let sup = 0;
    let conf1 = 0;
    let conf2 = 0;

    for (let i = 0; i < this.transactions.length; ++i) {

      let tr = this.transactions[i];

      if (tr.getItems().indexOf(this.xVal) > -1) {

        ++conf1;

        if (tr.getItems().indexOf(this.yVal) > -1) {

          ++sup;
          ++conf2;
        }

      }

    }

    this.sup = sup / this.transactions.length * 100;
    this.conf = conf2 / conf1 * 100;

  }
}
