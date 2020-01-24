import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocsMoyenAgeComponent } from './docs-moyen-age.component';

describe('DocsMoyenAgeComponent', () => {
  let component: DocsMoyenAgeComponent;
  let fixture: ComponentFixture<DocsMoyenAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsMoyenAgeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocsMoyenAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
