import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() public lists: List[] = [];
  @Input() public selectedList?: List;
  @Output() public newList: EventEmitter<void> = new EventEmitter<void>();
  @Output() public selectList: EventEmitter<List> = new EventEmitter<List>();

  public addList(): void {
    this.newList.emit();
  }

  public onListClick(list: List): void {
    this.selectedList = list;
    this.selectList.emit(list);
  }
}
