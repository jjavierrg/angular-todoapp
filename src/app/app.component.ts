import { Component } from '@angular/core';
import { List } from './core/models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public lists: List[] = [];
  public selectedList?: List;

  public onNewList(): void {
    this.lists.push({
      id: this.lists.length,
      name: `List ${this.lists.length + 1}`,
      tasks: [],
    });
  }

  public onSelectList(list: List): void {
    this.selectedList = list;
  }
}
