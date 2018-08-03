import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  messges: string[] = [];

  add(message: string) {
    this.messges.push(message);
  }
  clear() {
    this.messges = [];
  }
}
