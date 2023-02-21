import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IGallery } from '../gallery/gallery';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent implements OnInit {
  slidesStore: IGallery[];
  errorMessage: string;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {

    this.showGalleries();
  }
  showGalleries(): void {
    this.galleryService.getGalleries()
      // clone the data object, using its known IPhoto shape
      .subscribe({
        next: slidesStore => {
          this.slidesStore = slidesStore;
        },
        error: err => this.errorMessage = err
      });
  }
}
