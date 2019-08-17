import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
    {
        path: 'home',
        children: [{ 
            path: '', 
            component: HomeComponent
        }]
    }
];

export const HomeRouting = RouterModule.forChild(routes);