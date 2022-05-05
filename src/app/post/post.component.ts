import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRemove($event: MouseEvent) {
    console.log('removing post with id ', this.post.id)
    this.remove.emit(this.post.id);
  }
}
