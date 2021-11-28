import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


interface UnsplashResponse {
  urls: {
    regular:string;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( private http: HttpClient) { }

  getImage() {

    console.log('getImage is being called');
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',
   { headers:{
      Authorization: 'Client-ID PDaNoDXIwT_riRNC7QyC4DYd5akRRCN6hcS8HftQygA'
      }
    });
  }
}
