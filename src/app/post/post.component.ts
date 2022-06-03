import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, } from "@angular/router";
import { Post, PostsService } from "../services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.post = this.postsService.getById(+params.get("id")!)
    })
  }

  goToFourPost() {
    this.router.navigate(['/posts', 44])
  }
}
