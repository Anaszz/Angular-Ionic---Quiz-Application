import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamePrehistoirePage } from './game-prehistoire.page';

describe('GamePrehistoirePage', () => {
  let component: GamePrehistoirePage;
  let fixture: ComponentFixture<GamePrehistoirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePrehistoirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamePrehistoirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
