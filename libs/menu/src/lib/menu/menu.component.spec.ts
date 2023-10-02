import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { Status } from 'models';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    jest.spyOn(component.menuSelection, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check menu id is equal to selected', () => {
    expect(component.isSelected(2)).toBeTruthy();
    expect(component.isSelected(1)).toBeFalsy();
  });

  it('should change selected menu and emit status on menu item click', () => {
    component.menuItemClicked(Status.Removed, 3);
    expect(component.selected).toBe(3);
    expect(component.menuSelection.emit).toBeCalledWith(Status.Removed);
  });
});
