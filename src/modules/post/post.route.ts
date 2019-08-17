
import { PostListComponent} from './components/list.component'
import { PostCreateComponent } from './components/create.component'

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: ':author/post',
        children: [{ 
            path: 'list', 
            component: PostListComponent
        },
        { 
            path: 'create/:_id', 
            component: PostCreateComponent
        }]
    }
];

export const PostRouting = RouterModule.forChild(routes);