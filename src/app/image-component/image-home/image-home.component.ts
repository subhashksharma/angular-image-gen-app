import { Component, OnInit } from '@angular/core';
import { ImageService} from './../../image.service'


@Component({
  selector: 'app-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.css']
})
export class ImageHomeComponent implements OnInit {
  imageUrl : string ='';
  constructor( private imageService : ImageService) {
    
   }

  ngOnInit(): void {
  }

  callUnsplashDotComForImage() {
    this.imageService.getImage().subscribe((response) => { this.imageUrl = response.urls.regular });
    console.log('Calling')
  }
}
