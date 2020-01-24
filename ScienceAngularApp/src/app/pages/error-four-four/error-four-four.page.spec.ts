import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorFourFourPage } from './error-four-four.page';

describe('ErrorFourFourPage', () => {
  let component: ErrorFourFourPage;
  let fixture: ComponentFixture<ErrorFourFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorFourFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorFourFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
