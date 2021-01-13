import { Component, Input, OnInit } from '@angular/core';
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
  matchMode = 'contains';

  filterValue = '';

  constructor() { }

  ngOnInit(): void { }

  clearTableFilter(): void {
    this.filterValue = '';
    this.table.filterGlobal(this.filterValue, this.matchMode);
  }

}
