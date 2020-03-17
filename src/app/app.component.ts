import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //state$: Observable<AppState>;
  @Select(state => state.app) app$;
  constructor(private store: Store) {
    // this.state$ = this.store.select(state => state.app);
  }
}
