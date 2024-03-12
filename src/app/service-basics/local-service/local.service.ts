import {Injectable} from '@angular/core';

@Injectable()
export class LocalService {
  private _state:number = 0;
  constructor() { }


  get state(): number {
    return this._state;
  }

  set state(value: number) {
    this._state = value;
  }
}
