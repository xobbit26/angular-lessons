import {Component} from '@angular/core'

export interface Post{
  id?: number,
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Lessons'

  posts: Post[] = [
    {id: 1, title: 'test_title_1', text: 'test_text_1'},
    {id: 2, title: 'test_title_2', text: 'test_text_2'}
  ]

  createPost(post: Post) {
    this.posts.unshift(post)
    console.log('post ', post)
  }
}
