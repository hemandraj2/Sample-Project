import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { PostServiceService } from '../../Services/post-service.service';
import { PostDetailComponent } from './post-detail.component';
import { PostsComponent } from '../posts/posts.component';

describe('PostDetailComponent', () => {
    let component: PostDetailComponent;
    let fixture: ComponentFixture<PostDetailComponent>;
    let postService: PostServiceService;
    let postDetail;
    let postComments;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([
                    {path: 'posts', component: PostsComponent}
                ])
            ],
            declarations: [PostDetailComponent],
            providers: [PostServiceService]
        })
            .compileComponents();
        let router = TestBed.get(Router);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostDetailComponent);
        component = fixture.componentInstance;
        postService = TestBed.get(PostServiceService);
        fixture.detectChanges();

        postDetail = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        postComments = [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum",
                "email": "Jayne_Kuhic@sydney.com",
                "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                "postId": 1,
                "id": 3,
                "name": "odio adipisci rerum aut animi",
                "email": "Nikita@garfield.biz",
                "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
            {
                "postId": 1,
                "id": 4,
                "name": "alias odio sit",
                "email": "Lew@alysha.tv",
                "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
            },
            {
                "postId": 1,
                "id": 5,
                "name": "vero eaque aliquid doloribus et culpa",
                "email": "Hayden@althea.biz",
                "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
            }
        ];
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should cover switchviewComment', () => {
        component.switchviewComment();
    });

    it('should cover route to posts', () => {
        component.routeToPost();
    });

    it('should cover getPostDetail', () => {
        spyOn(postService, 'getPostDetails').withArgs(1).and.returnValue(of(postDetail));
        component.getPostDetail(1);
    });

    it('should cover getPostDetails error', () => {
        spyOn(postService, 'getPostDetails').withArgs(1).and.returnValue(throwError({}));
        component.getPostDetail(1);
    });

    it('should cover getPostComments', () => {
        spyOn(postService, 'getPostComments').withArgs(1).and.returnValue(of(postComments));
        component.getPostComments(1);
    });

    it('should cover getPostComments error', () => {
        spyOn(postService, 'getPostComments').withArgs(1).and.returnValue(throwError({}));
        component.getPostComments(1);
    });
});
