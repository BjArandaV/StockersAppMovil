import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateTodo2Page } from './update-todo2.page';

describe('UpdateTodo2Page', () => {
  let component: UpdateTodo2Page;
  let fixture: ComponentFixture<UpdateTodo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTodo2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTodo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

