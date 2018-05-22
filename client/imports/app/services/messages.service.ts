import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: any[] = []; // todo Yo Héctor:he creado un model, igual se puede reutilizar aquí, pendiente platicarlo con Juan.

  constructor() { }

  add(message: string, type) {
    this.messages.push({message: message, type: type});
  }

  clear() {
    this.messages = [];
  }
}
