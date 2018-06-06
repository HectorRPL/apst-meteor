import {Injectable} from '@angular/core';
import {Chip} from '../../../../../imports/models/chip';
import {ChipsColl} from '../../../../../imports/collections/chips';

@Injectable()
export class ChipsService {

  constructor() {
  }

  getUserChips(selector: object, options?: object): Chip {
    return ChipsColl.findOne(selector, options);
  }

}