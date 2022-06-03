import { Component, OnInit } from '@angular/core'
import { PostsService } from "../services/posts.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds: boolean = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              public postsService: PostsService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.showIds = !!params.get("showIds");
    })
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true }
    })
  }
}
