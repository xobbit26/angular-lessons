import {Component} from '@angular/core'

export interface Post {
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
  posts: Post[] = [
    {id: 1, title: 'test_title_1', text: 'test_text_1'},
    {id: 2, title: 'test_title_2', text: 'test_text_2'}
  ]

  createPost(post: Post) {
    post.id = this.posts.length + 1
    this.posts.unshift(post)
    console.log('post ', post)
  }

  onRemovePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
