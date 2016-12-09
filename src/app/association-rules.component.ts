import {Component} from "@angular/core";
import {Transaction, array} from "./shared/Transaction.model";
import {Rule} from "./shared/Rule.model";

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

  genRange: number = 10;
  minSup: number = 50;
  minConf: number = 50;

  rules: Rule[] = [];
  best: Rule;

  constructor() {

    this.generate();
  }

  generate(): void {
    this.transactions = Transaction.randomize(this.genRange);
    this.calculate();
  }

  calculate(): void {

    this.rules = [];
    this.best = null;

    for (let i = 0; i < this.ITEMS.length; ++i) {

      for (let j = 0; j < this.ITEMS.length; ++j) {

        if (i === j)
          continue;

        let rule: Rule = new Rule([this.ITEMS[i]], [this.ITEMS[j]]);

        if (rule.match(this.transactions, this.minSup / 100, this.minConf / 100)) {
          this.rules.push(rule);

          if (!this.best || rule.support === this.best.support && rule.confidence > this.best.confidence) {
            this.best = rule;
          } else if (!this.best || rule.support > this.best.support) {
            this.best = rule;
          }
        }

      }

    }

  }
}
