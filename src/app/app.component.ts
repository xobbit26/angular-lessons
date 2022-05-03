import {Component} from '@angular/core'
import {filter, interval, map, Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lessons'
  sub: Subscription

  constructor() {
    const intervalStream$ = interval(1000)

    this.sub = intervalStream$
      .pipe(
        filter(value => value % 2 === 0),
        map((value) => `mapped to value ${value}`)
      )
      .subscribe((value) => {
        console.log(value)
      })
  }

  stop() {
    this.sub.unsubscribe()
  }
}
