class Storage {
  #items;
  constructor(arr) {
    this.#items = arr;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    const rez1 = this.#items.push(newItem);
    return rez1;
  }
  removeItem(itemToRemove) {
    const rez2 = this.#items.filter(item => item !== itemToRemove);
    return (this.#items = rez2);
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
