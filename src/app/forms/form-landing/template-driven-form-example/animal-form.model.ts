export class AnimalForm {
  private _race: string = '';
  private _name: string = '';
  private _age: number = 0;

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
