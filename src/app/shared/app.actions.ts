import { State, StateContext, Action, Actions, ofAction } from '@ngxs/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

export class SetUsername {
    static readonly type = '[app] set username';
    constructor(public payload: string) {}
}

export class Navigate {
    static readonly type = '[router] navigate';
    constructor(public payload: string) {}
}

@State<string>({
    name: 'router',
    defaults: ''
})

export class RouterState {
    constructor(private router: Router) {}

    @Action(Navigate)
    async changeRoute(context: StateContext<string>, action: Navigate) {
        const path = action.payload;
        await this.router.navigate([path]);
        context.setState(path);
    }
}

//or listen to an event stream ala NgRX Effects

@Injectable()
export class RouterHandler {
    constructor(private router: Router, private actions$: Actions) {
        this.actions$
        .pipe(ofAction(Navigate))
        .subscribe(({ payload }) => this.router.navigate([payload]));
    }
}