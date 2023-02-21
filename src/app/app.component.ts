import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asUrl'
})
export class BackgroundUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `url(./images/${value})`
  }

}

export interface Link {
  id: number;
  name: string;
  url: string;
  backgroundImage: string;
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
    this.links = [
      { id: 1, name: "Trang chủ".toLocaleUpperCase(), url: "'/index'".toLowerCase(), backgroundImage: "./assets/images/fulls/12.jpg" },
      { id: 2, name: "Đọc sách".toLocaleUpperCase(), url: '/gallery'.toLowerCase(), backgroundImage: "./assets/images/fulls/11.jpg" },
      { id: 3, name: "học code".toLocaleUpperCase(), url: '/generic'.toLowerCase(), backgroundImage: "./assets/images/fulls/10.jpg" },
      { id: 4, name: "mua bán sách cũ".toLocaleUpperCase(), url: '/carousel'.toLowerCase(), backgroundImage: "./assets/images/fulls/09.jpg" },
      { id: 5, name: "Thuê gia sư".toLocaleUpperCase(), url: '/character'.toLowerCase(), backgroundImage: "./assets/images/fulls/08.jpg" },
    ]
  }
}

