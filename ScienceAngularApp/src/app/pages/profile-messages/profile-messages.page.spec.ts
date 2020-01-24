import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileMessagesPage } from './profile-messages.page';

describe('ProfileMessagesPage', () => {
  let component: ProfileMessagesPage;
  let fixture: ComponentFixture<ProfileMessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMessagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
