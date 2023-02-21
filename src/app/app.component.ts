import { Component, OnInit } from '@angular/core';

export interface Link {
  id: number;
  name: string;
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  links: Link[];
  tab: number;
  activeLink(tab): void {
    if (tab === 1) {
      this.tab = 1;
    } else if (tab === 2) {
      this.tab = 2;
    } else if (tab === 3) {
      this.tab = 3;
    } else if (tab === 4) {
      this.tab = 4;
    } else if (tab === 5) {
      this.tab = 5;
    }
  }
  ngOnInit(): void {
    this.tab = 1;
    this.title = 'angular ecoommerce';
  }
}

