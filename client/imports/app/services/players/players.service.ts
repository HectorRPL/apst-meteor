import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MeteorObservable} from 'meteor-rxjs';
import {PlayersColl} from '../../../../../imports/collections/players';
import {Player} from '../../../../../imports/models/player';

@Injectable()
export class PlayersService {

  constructor() {
  }

  getPlayer(selector: object, options?: object): Player {
    return PlayersColl.findOne(selector, options);
  }

  updatePlayer(player:Player): Observable<{}> {
    return MeteorObservable.call('updatePlayer', player);
  }

}
