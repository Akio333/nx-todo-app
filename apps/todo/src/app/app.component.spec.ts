import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'header';
import { ListComponent } from './list/list.component';
import { ItemComponent } from 'item';
import { ButtonComponent } from 'button';
import { Status } from 'models';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderComponent,
        ItemComponent,
        ButtonComponent,
      ],
      declarations: [AppComponent, NxWelcomeComponent, ListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Today');
  });

  it(`should have as title 'todo'`, () => {
    expect(app.title).toEqual('todo');
  });

  it('should update status as coming from menu handler', () => {
    app.menuHandler(Status.Done);
    expect(app.status).toBe(Status.Done);
  });
});
