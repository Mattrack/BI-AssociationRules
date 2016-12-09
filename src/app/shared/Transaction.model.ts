export let array = [
  "Bread",
  "Milk",
  "Beef",
  "Eggs",
  "Chicken",
  "Onions",
  "Letuce",
  "Banana",
  "Apple",
  "Fish",
  "Water"
];

export class Transaction {
  items: String[];

  constructor() {
    this.items = [];
  }

  static randomize(nb: number): Transaction[] {

    let transactions: Transaction[] = [];

    for (let i = 0; i < nb; ++i) {

      let tr = new Transaction();

      let nbElem = Math.floor(Math.random()*(array.length-2+1)+2);

      for (let j = 0; j < nbElem; ++j) {

        let s: String;
        let alreadyIn = true;
        while (alreadyIn) {

          let index = Math.floor(Math.random() * (array.length));
          s = array[index];

          alreadyIn = false;
          for (let k = 0; !alreadyIn && k < tr.getItems().length; ++k) {

            let tmp: String = tr.getItems()[k];
            if (tmp === s) {
              alreadyIn = true;
            }
          }

        }

        tr.addItem(s);
      }

      transactions.push(tr);
    }
    return transactions;
  }

  addItem(item: String): void {
    this.items.push(item);
  }

  getItems(): String[] {
    return this.items;
  }
}
