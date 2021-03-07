import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-dropdown',
  templateUrl: './icon-dropdown.component.html',
  styleUrls: ['./icon-dropdown.component.scss']
})
export class IconDropdownComponent implements OnInit {

  @Input()
  iconClass = 'pi pi-info-circle';

  constructor() { }

  ngOnInit(): void { }
}
