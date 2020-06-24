import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return null;

    let words = value.split(' ');

    words = words.map((word, index) =>
      this.isPreposition(word) && index !== 0
        ? word.toLowerCase()
        : this.toTitleCase(word)
    );

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['of', 'the'];

    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
