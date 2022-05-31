export class List {
  private items: string[] = [];

  constructor(
    public readonly id: string,
    public name: string,
  ) { }

  public getItems() {
    return this.items.slice();
  }

  public addItem(item: string) {
    this.items.push(item);
  }
};
