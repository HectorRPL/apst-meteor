import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MeteorObservable} from 'meteor-rxjs';

@Injectable()
export class UsersService {

  constructor() {
  }

  updateUsername(username:string): Observable<{}> {
    return MeteorObservable.call('updateUsername', username);
  }

}
