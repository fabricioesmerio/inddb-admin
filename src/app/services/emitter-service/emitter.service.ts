import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  private static emitters: {
    [eventName: string]: EventEmitter<any>
  } = {};

  static get(eventName: string): EventEmitter<any> {
    if (!this.emitters[eventName]) {
      this.emitters[eventName] = new EventEmitter<any>();
    }
    return this.emitters[eventName];
  }

  static remove(eventName: string): Boolean {
    if (!this.emitters[eventName]) {
      return;
    }

    this.emitters[eventName].unsubscribe();
    delete this.emitters[eventName];
    return true;
  }

}
