import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = [1];

  title = 'hello-world';
  movieTitle;

  post = {
    title: 'Title',
    isFavorite: true,
  };

  tweet = {
    body: 'here is the body of a tweet...',
    isLiked: true,
    likesCount: 10,
  };

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('onFavoriteChange clicked', eventArgs);
  }
}
