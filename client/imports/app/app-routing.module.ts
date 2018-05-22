import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        loadChildren: './layout/layout.module#LayoutModule',
        data: { preload: true }
    },
    {
        path: 'verify-email/:token',
        loadChildren: './verify-email/verify-email.module#VerifyEmailModule',
        data: { preload: true }
    },
    {
        path: 'reset-password/:token',
        loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
        data: { preload: true }
    },
    {
        path: 'not-found',
        loadChildren: './not-found/not-found.module#NotFoundModule',
        data: { preload: true }
    },
    {
        path: 'notice-of-privacy',
        loadChildren: './notice-of-privacy/notice-of-privacy.module#NoticeOfPrivacyModule',
        data: { preload: true }
    },
    {
        path: 'policies',
        loadChildren: './policies/policies.module#PoliciesModule',
        data: { preload: true }
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { preload: true }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}