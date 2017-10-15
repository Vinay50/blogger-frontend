import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostShowComponent } from './posts/post-show.component';
import { PostsComponent } from './posts/posts.component';
import { PostNewComponent } from './posts/post-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent},
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostShowComponent },
    { path: 'posts/:new', component: PostNewComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
