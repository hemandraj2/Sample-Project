import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { postDetailResponse } from '../../Models/postResponse.model';
import { postCommentResponse } from '../../Models/postCommentsResponse.model';
import { PostServiceService } from '../../Services/post-service.service';

declare var $: any;
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postData: postDetailResponse = null;
  postComments: postCommentResponse[] = null;
  postId: string;
  viewComments: boolean = false;
  showLoader: boolean = false;

  @ViewChild('errorModal') errorModal: ElementRef;

  constructor(
    private postService: PostServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPostDetail(this.postId);
  }

  switchviewComment() {
    this.viewComments = !this.viewComments;
  }

  getPostDetail(id) {
    this.showLoader = true;
    this.postService.getPostDetails(id).subscribe((data: postDetailResponse) => {
      this.postData = data;
      this.getPostComments(id);
      this.showLoader = false;
    },
      (err) => {
        $(this.errorModal.nativeElement).modal({
          backdrop: 'static',
          keyboard: false
        });
        $(this.errorModal.nativeElement).modal('show');
        this.showLoader = false;
      })
  }

  getPostComments(id) {
    this.showLoader = true;
    this.postService.getPostComments(id).subscribe((data: [postCommentResponse]) => {
      this.postComments = data;
      this.showLoader = false;
    },
      (err) => {
        $(this.errorModal.nativeElement).modal({
          backdrop: 'static',
          keyboard: false
        });
        $(this.errorModal.nativeElement).modal('show');
        this.showLoader = false;
      })
  }

  routeToPost() {
    this.router.navigate(['/posts']);
  }

}
