import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];

export const APRouting = RouterModule.forRoot(routes, { useHash: true });