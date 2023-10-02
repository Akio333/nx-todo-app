import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { Status, Task } from 'models';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.task = new Task(1, 'Demo Task', Status.Todo);
    jest.spyOn(component.updateTask, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set name on initialization', () => {
    const expected = 'item1';
    component.ngOnInit();
    expect(component.name).toEqual(expected);
  });

  it('should update task as done and emit on checkbox click', () => {
    const expected = new Task(1, 'Demo Task', Status.Done);
    component.onClicked(true);
    expect(component.updateTask.emit).toBeCalledWith(expected);
  });

  it('should update task as todo and emit on checkbox click', () => {
    component.task = new Task(1, 'Demo Task', Status.Done);
    const expected = new Task(1, 'Demo Task', Status.Todo);
    component.onClicked(true);
    expect(component.updateTask.emit).toBeCalledWith(expected);
  });

  it('should update task as removed and emit on remove btn click', () => {
    const expected = new Task(1, 'Demo Task', Status.Removed);
    component.onClicked(false);
    expect(component.updateTask.emit).toBeCalledWith(expected);
  });
});
