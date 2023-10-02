import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ItemComponent } from 'item';
import { ButtonComponent } from 'button';
import { Status, Task } from 'models';
import { SimpleChange } from '@angular/core';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const mockList = [
    new Task(1, 'Demo Task', Status.Todo),
    new Task(2, 'Demo Task', Status.Removed),
    new Task(3, 'Demo Task', Status.Done),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [ItemComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.taskList = mockList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter task list as per menu selection', () => {
    const expected = [new Task(1, 'Demo Task', Status.Todo)];
    expect(component.getList()).toEqual(expected);
  });

  it('should create new task', () => {
    const prevLength = component.taskList.length;
    component.handleCreateItem(true);
    expect(component.id).toBeGreaterThan(1);
    expect(component.taskList.length).toBe(prevLength + 1);
  });

  it('should update task', () => {
    const updatedTak = new Task(1, 'Demo Task', Status.Removed);
    component.handleUpdateTask(updatedTak);
    expect(component.taskList[0].status).toBe(Status.Removed);
  });

  it('should update current menu on changes', () => {
    component.currentMenu = Status.Todo;
    component.status = Status.Done;
    component.ngOnChanges({
      status: new SimpleChange(Status.Todo, Status.Done, false),
    });
    expect(component.currentMenu).toBe(Status.Done);
  });
});
