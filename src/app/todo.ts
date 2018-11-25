export class Todo {
  id: number;
  title = '';
  allTime = 1800;
  timeSpend = 0;
  complete = false;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
