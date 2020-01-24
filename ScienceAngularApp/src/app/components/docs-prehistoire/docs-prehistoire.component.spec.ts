import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocsPrehistoireComponent } from './docs-prehistoire.component';

describe('DocsPrehistoireComponent', () => {
  let component: DocsPrehistoireComponent;
  let fixture: ComponentFixture<DocsPrehistoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsPrehistoireComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocsPrehistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
