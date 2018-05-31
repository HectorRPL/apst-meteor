import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MeteorObservable} from 'meteor-rxjs';
import 'rxjs/add/operator/map';
import {Chip} from "../../../../imports/models/chip";

export function cantidadBetValidator(): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const cantidad = control.value;

        return MeteorObservable.call('getNumChips').map((result: Chip) => {
            if (!Number.isInteger(result.numChips)
                || result.numChips < cantidad) {
                return {'amountInvalid': true};
            }
        });
    };
}
