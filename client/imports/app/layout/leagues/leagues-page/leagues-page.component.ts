import {Component, Input, OnInit} from '@angular/core';
import {MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import {LeaguesColl} from '../../../../../../imports/collections/leagues';
import {Observable} from "rxjs/Observable";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {LeaguesService} from "../../../services/leagues/leagues.service";
import {League} from "../../../../../../imports/models/league";
import {Options} from "../../../../../../imports/models/options";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/combineLatest';
import { Subscription } from 'rxjs/Subscription';
import { PaginationService } from 'ngx-pagination';


@Component({
    selector: 'app-leagues-page',
    templateUrl: './leagues-page.component.html',
    styleUrls: ['./leagues-page.component.scss']
})
export class LeaguesPageComponent implements OnInit {

    public model: any;
    perPage: Subject<number> = new Subject<number>();
    page: Subject<number> = new Subject<number>();
    optionsSub: Subscription;
    leaguesSub: Subscription;
    selector: object;
    options: Options;
    leagues$: Observable<League[]>;
    partiesSize: number = 0;
    autorunSub: Subscription;

    constructor(private leaguesServ: LeaguesService,
                private pagServ: PaginationService) {
        this.selector = {};
    }


    ngOnInit() {
        this.optionsSub = Observable.combineLatest(
            this.perPage,
            this.page
        ).subscribe(([pageSize, page]) => {
            const options: Options = {
                limit: pageSize as number,
                skip: ((page as number) - 1) * (pageSize as number)
            };
            this.pagServ.setCurrentPage('leagues', page as number);
            if (this.leaguesSub) {
                this.leaguesSub.unsubscribe();
            }
            this.leaguesSub = MeteorObservable.subscribe('leagues', this.selector, options).subscribe(() => {
                this.leagues$ = LeaguesColl.find();
            });
        });

        this.pagServ.register({
            id: 'leagues',
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.partiesSize
        });

        this.perPage.next(5);
        this.page.next(1);

        this.autorunSub = MeteorObservable.autorun().subscribe(() => {
            this.partiesSize = Counts.get('numberOfleagues');
            this.pagServ.setTotalItems('leagues', this.partiesSize);
        });

    }


    getLeagues(): void {

        /*MeteorObservable.subscribe('leagues', this.selector, this.options)
            .subscribe(() => {
                MeteorObservable.autorun()
                    .subscribe(() => {
                        this.leagues$ = LeaguesColl.find(this.selector, {
                            limit: this.perPage,
                            skip: (this.page - 1) * this.perPage,
                        });
                    });
            });*/

    }


    onPageChanged(page: number): void {
        this.page.next(page);
    }

    ngOnDestroy() {
        this.leaguesSub.unsubscribe();
        this.optionsSub.unsubscribe();
        this.autorunSub.unsubscribe();
    }

}
