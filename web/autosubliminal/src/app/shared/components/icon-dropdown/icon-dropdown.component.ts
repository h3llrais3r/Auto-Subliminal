import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-dropdown',
    templateUrl: './icon-dropdown.component.html',
    styleUrls: ['./icon-dropdown.component.scss'],
    standalone: true
})
export class IconDropdownComponent {

  @Input()
  iconClass = 'fa fa-info-circle';
}
