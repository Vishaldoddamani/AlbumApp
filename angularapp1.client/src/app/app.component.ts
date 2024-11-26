import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Album {
  albumTitle: string;
  userId: number;
  photoTitle: string;
  photoUrl: string;
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
    this.http.get<Album[]>('https://localhost:7184/api/Album?userId=1').subscribe(
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
