// Dependencies
import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NgRedux } from 'ng2-redux';

// App Parts
import { AppComponent } from "./app.component";
import { UIActions } from '../actions/ui.actions';

// Mock out the NgRedux class with just enough to test what we want.
class MockRedux extends NgRedux<any> {
  constructor() {
    super(null);
  }
  dispatch = () => undefined;
}

// Start Declaring Tests
describe("AppComponent", () => {

    let actions: UIActions;
    let mockRedux: NgRedux<any>;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        mockRedux = new MockRedux();
        actions = new UIActions(mockRedux);
        return TestBed
            .configureTestingModule({
                declarations: [AppComponent]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
            });
    }));
    // it('isMobile', () => {
    //   console.log(fixture);
    //   expect(fixture.isMobile).toBe(true);
    //   // const expectedAction = {
    //   //   type: UI_ACTIONS.
    //   // };
    //   //
    //   // spyOn(mockRedux, 'dispatch');
    //   // actions.isMobile();
    //   //
    //   // expect(mockRedux.dispatch).toHaveBeenCalled();
    //   // expect(mockRedux.dispatch).toHaveBeenCalledWith(
    //   //   expectedAction
    //   // );
    // });
});
