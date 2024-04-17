import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsSidebarComponent } from './threads-sidebar.component';

describe('ThreadsSidebarComponent', () => {
  let component: ThreadsSidebarComponent;
  let fixture: ComponentFixture<ThreadsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreadsSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
