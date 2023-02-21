import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryDetailComponent } from './gallery-detail.component';
import { GalleryComponent } from './gallery.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      { path: 'gallery', component: GalleryComponent },
      { path: 'gallery/:id', component: GalleryDetailComponent }
    ])
  ]
})
export class GalleryModule { }
