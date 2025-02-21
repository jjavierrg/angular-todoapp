import { Component, EventEmitter, Input, Output } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.css'],
})
export class ListSummaryComponent {
  @Input() public list?: List;
  @Input() public selected: boolean = false;
  @Output() public listClick: EventEmitter<List> = new EventEmitter<List>();

  public onClick(): void {
    this.listClick.emit(this.list);
  }
}
