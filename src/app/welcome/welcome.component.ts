import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[appHideMissing], ",
})
export class HideMissingDirective {
  constructor(private el: ElementRef) { }

  @HostListener("error")
  private onError() {
    this.el.nativeElement.style.display = "none";
  }
}
interface Media {
  id?: number;
  href: string;
  src: string;
  decription?: string;
  buttonUrl?: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  ListMedia: Media[];
  lengthMedia: number;
  errorMessage: string;
  constructor() {
    this.ListMedia = new Array<Media>();
    this.lengthMedia = this.ListMedia.length;
  }
  ngOnInit(): void {
    for (var i: number = 1; i < 0; i++) {
      this.ListMedia.push({
        id: i,
        href: "assets/images/fulls/0" + i + ".jpg",
        src: "assets/images/thumbs/0" + i + ".jpg",
      });

    }
    this.lengthMedia = this.ListMedia.length;
  }
  onAdd(): void {
    // Cập nhật giá trị length của anh dách
    this.lengthMedia = this.ListMedia.length + 1;
    // check danh sách
    if (this.lengthMedia < 10 && this.lengthMedia >= 0) {
      this.ListMedia.push({
        id: this.lengthMedia,
        href: "assets/images/fulls/0" + this.lengthMedia + ".jpg",
        src: "assets/images/thumbs/0" + this.lengthMedia + ".jpg",
      });
    } else if (this.lengthMedia > 10 && this.lengthMedia < 13) {
      this.ListMedia.push({
        id: this.lengthMedia,
        href: "assets/images/fulls/" + this.lengthMedia + ".jpg",
        src: "assets/images/thumbs/" + this.lengthMedia + ".jpg",
      });
    } else {
      this.errorMessage = "Can't add media.";
    }
  }
  onSubtract(currentId: number): void {
    // Cập nhật giá trị length của anh dách

    if (this.lengthMedia >= 0) {
      for (var i = 0; i < this.ListMedia.length; i++) {
        if (this.ListMedia[i].id == currentId) {
          this.ListMedia.splice(i, 1);
          this.lengthMedia = this.ListMedia.length;
          break;
        }
      }
    }
    else {
      this.lengthMedia = 0;
      this.errorMessage = "No media to show.";
    }
  }
  onSubtractAll(): void {
    // Cập nhật giá trị length của anh dách 
    if (this.lengthMedia >= 0) {
      this.ListMedia = [];
      this.lengthMedia = 0;
    }
    else {
      this.errorMessage = "No media to show.";
    }

    if (this.lengthMedia >= 1) {
      this.ListMedia.forEach((value, index) => {
        this.ListMedia.splice(index, this.lengthMedia - 1);
      });
    }
    else {
      this.lengthMedia = 0;
      this.errorMessage = "All media deleted.";
    }
  }
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
