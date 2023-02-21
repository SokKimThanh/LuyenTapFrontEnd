import { Component, OnInit } from '@angular/core';
import { IGallery } from 'src/app/gallery/gallery';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos: IGallery[] | undefined;
  errorMessage: string | undefined;
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.showGalleries();
  }

  showGalleries(): void {
    this.galleryService.getGalleries()
      // clone the data object, using its known IPhoto shape
      .subscribe({
        next: photos => {
          this.photos = photos;
        },
        error: err => this.errorMessage = err
      });
  }
}
