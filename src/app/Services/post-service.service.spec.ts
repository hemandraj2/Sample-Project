import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostServiceService } from './post-service.service';
import { HttpClient } from '@angular/common/http';

describe('PostServiceService', () => {
  let service: PostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers:[
        HttpClient
      ]
    });
    service = TestBed.inject(PostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be cover getAllposts', () => {
    service.getAllPosts();
    expect(service).toBeTruthy();
  });

  it('should be cover getPostDetails', () => {
    service.getPostDetails(1);
    expect(service).toBeTruthy();
  });

  it('should be cover getComments', () => {
    service.getPostComments(1);
    expect(service).toBeTruthy();
  });
});
