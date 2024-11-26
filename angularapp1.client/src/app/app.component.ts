import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Album {
  albumTitle: string;
  userId: number;
  photoTitle: string;
  photoUrl: string;
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public albums: Album[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').subscribe(
      (result) => {
        this.albums = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularapp1.client';
}
