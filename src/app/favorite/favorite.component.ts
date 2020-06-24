import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
      .glyphicon {
        color: green;
      }

      .glyphicon-star {
        // background: black;
      }
    `,
  ],
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  // property binding with alias
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
