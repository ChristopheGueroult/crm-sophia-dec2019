import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphikComponent } from './graphik.component';

describe('GraphikComponent', () => {
  let component: GraphikComponent;
  let fixture: ComponentFixture<GraphikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
