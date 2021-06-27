import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { postDetailResponse } from '../../Models/postResponse.model';
import { PostServiceService } from '../../Services/post-service.service';

declare var $:any;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  postArray: postDetailResponse[] = [];
  displayArray: postDetailResponse[] = [];
  noOfPage: number = 0;
  currentPage: number = 1;
  dataAvailable:boolean = false;
  showLoader:boolean = false;

  @ViewChild('errorModal') errorModal:ElementRef;

  constructor(
    private postService: PostServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentPage')) {
      this.currentPage = parseInt(sessionStorage.getItem('currentPage'));
    }
    this.getAllPosts();
  }

  getAllPosts() {
    this.showLoader = true;
    this.postService.getAllPosts().subscribe((data: [postDetailResponse]) => {
      this.postArray = data;
      this.displayArray = this.postArray.slice(this.currentPage * 5 - 5, this.currentPage * 5);
      this.noOfPage = Math.ceil(this.postArray.length / 5);
      if(this.postArray.length>0){
        this.dataAvailable = true;
      }
      this.showLoader = false;
    },
      err => {
        this.dataAvailable = false;
        this.showLoader = false;
        $(this.errorModal.nativeElement).modal('show');
      })
  }

  nextPage() {
    if (this.currentPage != this.noOfPage) {
      this.currentPage = this.currentPage + 1;
      this.displayArray = this.postArray.slice(this.currentPage * 5 - 5, this.currentPage * 5);
    }
  }

  loadPage(i){
    this.currentPage = i;
    this.displayArray = this.postArray.slice(this.currentPage * 5 - 5, this.currentPage * 5);
  }

  previousPage() {
    if (this.currentPage != 1) {
      this.currentPage = this.currentPage - 1;
      this.displayArray = this.postArray.slice(this.currentPage * 5 - 5, this.currentPage * 5);
    }
  }

  goToDetails(id) {
    sessionStorage.setItem('currentPage', JSON.stringify(this.currentPage));
    this.router.navigate(['/post-detail/', id]);
  }
}
