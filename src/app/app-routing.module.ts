import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostShowComponent } from './posts/post-show.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostShowComponent },

]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
