import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ActiveBetsPageComponent} from './active-bets-page/active-bets-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'active'
            },
            {
                path: 'active',
                component: ActiveBetsPageComponent
            },
            {
                path: 'pending',
                loadChildren: './pending-bets-page/pending-bets-page.module#PendingBetsPageModule',
                data: {preload: true}
            },
            {
                path: 'won',
                loadChildren: './won-bets-page/won-bets-page.module#WonBetsPageModule',
                data: {preload: true}
            },
            {
                path: 'losses',
                loadChildren: './losses-bets-page/losses-bets-page.module#LossesBetsPageModule',
                data: {preload: true}
            },
            {
                path: 'draw',
                loadChildren: './draw-bets-page/draw-bets-page.module#DrawBetsPageModule',
                data: {preload: true}
            }

        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}