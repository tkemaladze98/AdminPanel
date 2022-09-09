import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent {
  menuIcon: string = 'switch_right';
  menuIconChange: boolean = false;

  constructor(public route: Router) {}

  mode = new FormControl('side');

  links: { name: string; icon: string }[] = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Hotels', icon: 'folder_open' },
    { name: 'Users', icon: 'verified_user' },
    { name: 'Sales', icon: 'star' },
  ];

  iconChange() {
    this.menuIconChange = !this.menuIconChange;
    if (this.menuIconChange) {
      this.menuIcon = 'switch_left';
    } else {
      this.menuIcon = 'switch_right';
    }
  }

  navigateTo(link: string) {
    this.route.navigate([`./main/${link}`]);
  }
}

// shoes.selectedOptions.selected[0]?.value
