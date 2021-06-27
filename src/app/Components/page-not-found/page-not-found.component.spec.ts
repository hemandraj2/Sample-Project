import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { PostsComponent } from '../posts/posts.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {path: 'posts', component: PostsComponent}
        ])
      ],
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
    let router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cover route to posts', () => {
    component.routeToPost();
    expect(component).toBeTruthy();
  });
});
