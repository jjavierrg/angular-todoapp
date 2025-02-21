import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListSummaryComponent } from './components/list-summary/list-summary.component';

@NgModule({
  declarations: [SidebarComponent, ListSummaryComponent],
  imports: [CommonModule],
  providers: [],
  exports: [SidebarComponent],
})
export class CoreModule {}
