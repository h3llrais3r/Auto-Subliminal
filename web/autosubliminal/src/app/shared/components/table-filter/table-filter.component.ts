import { Component, Input, OnInit } from '@angular/core';
import { TableState } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input()
  table: Table;

  @Input()
  tableStateKey: string; // needed if you use the table state functionality

  @Input()
  matchMode = 'contains';

  filterValue = '';

  constructor() { }

  ngOnInit(): void {
    // Restore global filter when used with table state functionality
    if (this.tableStateKey) {
      const tableState = JSON.parse(localStorage.getItem(this.tableStateKey)) as TableState;
      if (tableState && tableState.filters && tableState.filters.global) {
        this.filterValue = tableState.filters.global.value;
        this.matchMode = tableState.filters.global.matchMode;
      }
    }
  }

  clearTableFilter(): void {
    this.filterValue = '';
    this.table.filterGlobal(this.filterValue, this.matchMode);
  }
}
