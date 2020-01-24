import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderItemComponent } from './slider-item.component';

describe('SliderItemComponent', () => {
  let component: SliderItemComponent;
  let fixture: ComponentFixture<SliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
