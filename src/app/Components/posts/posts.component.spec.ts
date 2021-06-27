import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { PostServiceService } from '../../Services/post-service.service';
import { PostsComponent } from './posts.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';

describe('PostsComponent', () => {
    let component: PostsComponent;
    let fixture: ComponentFixture<PostsComponent>;
    let postsArray;
    let postService: PostServiceService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([
                    {path: 'post-detail/:id', component: PostDetailComponent}
                ])
            ],
            declarations: [PostsComponent],
            providers: [PostServiceService]
        })
            .compileComponents();
        let router = TestBed.get(Router);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        postService = TestBed.get(PostServiceService);
        fixture.detectChanges();

        postsArray = [{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }]
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should cover ngOninit with session data', () => {
        sessionStorage.setItem('currentPage', '1');
        component.ngOnInit();
        sessionStorage.removeItem('currentPage');
        component.ngOnInit();
    });

    it('should cover nextPage', () => {
        component.postArray = postsArray;
        component.currentPage = 1;
        component.noOfPage = 1;
        component.nextPage();
        component.noOfPage = 1;
        component.currentPage = 2;
        component.nextPage();
    });

    it('should cover previousPage', () => {
        component.postArray = postsArray;
        component.currentPage = 1;
        component.previousPage();
        component.currentPage = 2;
        component.previousPage();
    });

    it('should cover loadPage', () => {
        component.postArray = postsArray;
        component.loadPage(1);
    });

    it('should cover goToDetails', () => {
        component.goToDetails(1);
    });

    it('should cover getAllPosts', () => {
        spyOn(postService, 'getAllPosts').and.returnValue(of(postsArray));
        component.getAllPosts();
    });

    it('should cover getAllPosts empty array', () => {
        spyOn(postService, 'getAllPosts').and.returnValue(of([]));
        component.getAllPosts();
    });

    it('should cover getAllPosts error', () => {
        spyOn(postService, 'getAllPosts').and.returnValue(throwError({}));
        component.getAllPosts();
    });
});
