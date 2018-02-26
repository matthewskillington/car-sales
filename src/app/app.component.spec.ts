import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


});
