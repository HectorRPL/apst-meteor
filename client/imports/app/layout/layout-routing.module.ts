import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LeaguesPageComponent} from "./leagues/leagues-page/leagues-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'leagues',
                component: LeaguesPageComponent
            },
            {
                path: 'bet',
                loadChildren: './bets/bets.module#BetsModule',
                data: {preload: true}
            },
            {
                path: 'bet/:betId',
                loadChildren: './bets/bet-detail-page/bet-detail-page.module#BetDetailPageModule',
                data: {preload: true}
            },
            {
                path: 'leagues/:leagueId/match/:matchId',
                loadChildren: './leagues/create-bet-page/create-bet-page.module#CreateBetPageModule',
                data: {preload: true}
            },
            {
                path: 'leagues/:leagueId/matches',
                loadChildren: './leagues/matches-page/matches-page.module#MatchesPageModule',
                data: {preload: true}
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
