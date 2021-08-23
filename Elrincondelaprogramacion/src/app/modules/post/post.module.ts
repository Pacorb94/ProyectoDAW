import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchPostComponent } from './components/watch-post/watch-post.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { MostActivePostsComponent } from './components/most-active-posts/most-active-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './../post/post-routing.module';

@NgModule({
    declarations: [
        MostActivePostsComponent,
        WatchPostComponent,
        CommentListComponent,
        CreateCommentComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FlashMessagesModule.forRoot(),
        MomentModule,
        RouterModule,
        PostRoutingModule,
        ReactiveFormsModule
    ],
    exports:[
        MostActivePostsComponent
    ]
})
export class PostModule { }
