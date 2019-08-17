
import { AuthorListComponent} from './components/list.component'
import { AuthorCreateComponent } from './components/create.component'

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'author',
        children: [{ 
            path: 'list', 
            component: AuthorListComponent
        },
        { 
            path: 'create/:_id', 
            component: AuthorCreateComponent
        }]
    }
];

export const AuthorRouting = RouterModule.forChild(routes);