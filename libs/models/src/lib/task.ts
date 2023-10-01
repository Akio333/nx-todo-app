import { Status } from './enums/status';

export class Task {
  id: number;
  taskItem: string;
  status: Status;

  constructor(id: number, taskItem: string, status: Status) {
    this.id = id;
    this.taskItem = taskItem;
    this.status = status;
  }
}
