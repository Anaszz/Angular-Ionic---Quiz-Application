import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesPage } from './games.page';

describe('GamesPage', () => {
  let component: GamesPage;
  let fixture: ComponentFixture<GamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
