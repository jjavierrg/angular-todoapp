export class Task {
  public description?: string;
  public doneDate?: Date;
  public title: string = '';

  public get isDone(): boolean {
    return !!this.doneDate;
  }
}
