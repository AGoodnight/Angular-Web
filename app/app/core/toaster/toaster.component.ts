import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { select, NgRedux } from 'ng2-redux';
import { Observable, Subject } from 'rxjs/Rx';
import { UI_ACTIONS }  from '../../../reducers/actions';

@Component({
  selector: 'toaster',
  template: ''
})

export class Toaster implements OnDestroy {

  // The Snackbar/Toaster is executed through the state machine,
  // do not call snackbar or toaster methods directly, this may
  // cause conflicts.

  @select(['UiState', 'toasterConfig']) $config: Observable<any>;
  private ngUnsubscribe: Subject<any> = new Subject();
  private subscribed: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private ngRedux: NgRedux<any>,
  ) {
    this.$config.subscribe((res) => {
      if (res) {
        if (this.subscribed) {
          this.show(
            res['msg'],
            res['dimiss'],
            res['style'],
            res['duration']);
        }
      }
      if (!this.subscribed) {
        this.subscribed = true;
      }
    });
  }

  show(msg: string, dismiss?: string, style?: string, duration?: number) {
    let _classes = (style) ? [style] : null;
    this.snackBar.open(
      msg,
      (dismiss) ? dismiss : "dismiss",
      {
        extraClasses: _classes,
        duration: (duration) ? duration : 3000
      }

    );
    this.changeDetector.markForCheck();
  }

  // Lifecycle Hooks.
  // ---------------------------
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
