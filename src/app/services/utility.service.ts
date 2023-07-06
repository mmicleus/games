import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  sortByName(games: any[]) {
    let aux: any;

    for (let i2 = 0; i2 < games.length; i2++) {
      for (let i = 0; i < games.length - 1; i++) {
        if (games[i].name > games[i + 1].name) {
          // console.log(games[i].name);
          // console.log(games[i + 1].name);
          let aux = games[i];
          games[i] = games[i + 1];
          games[i + 1] = aux;
        }
      }
    }

    return games;
  }

  sortByReleaseData(games: any[]) {
    let aux: any;

    for (let i2 = 0; i2 < games.length; i2++) {
      for (let i = 0; i < games.length - 1; i++) {
        if (new Date(games[i].released) > new Date(games[i + 1].released)) {
          let aux = games[i];
          games[i] = games[i + 1];
          games[i + 1] = aux;
        }
      }
    }

    return games;
  }

  sortByAdded(games: any[]) {
    let aux: any;

    for (let i2 = 0; i2 < games.length; i2++) {
      for (let i = 0; i < games.length - 1; i++) {
        if (games[i].added > games[i + 1].added) {
          let aux = games[i];
          games[i] = games[i + 1];
          games[i + 1] = aux;
        }
      }
    }

    return games;
  }

  sortByUpdateDate(games: any[]) {
    let aux: any;

    for (let i2 = 0; i2 < games.length; i2++) {
      for (let i = 0; i < games.length - 1; i++) {
        if (new Date(games[i].updated) > new Date(games[i + 1].updated)) {
          let aux = games[i];
          games[i] = games[i + 1];
          games[i + 1] = aux;
        }
      }
    }

    return games;
  }

  sortByRating(games: any[]) {
    let aux: any;

    for (let i2 = 0; i2 < games.length; i2++) {
      for (let i = 0; i < games.length - 1; i++) {
        if (games[i].rating > games[i + 1].rating) {
          let aux = games[i];
          games[i] = games[i + 1];
          games[i + 1] = aux;
        }
      }
    }

    return games;
  }

  getFormattedDate(date: string) {
    let dateObj = new Date(date);

    let month = this.getMonthByIndex(dateObj.getMonth());
    let dateOfMonth = dateObj.getDate();
    let year = dateObj.getFullYear();

    return `${month} ${dateOfMonth} , ${year}`;
  }

  getMonthByIndex(index: number) {
    let mS = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    return mS[index];
  }

  getGenresHtml(genres: string[]) {
    return genres.map((value, index) => {
      if (index == genres.length - 1) return `<span>${value}</span>`;
      else return `<span>${value}</span>,`;
    });
  }

  getNrOfThumbsUp(ratings: any[]) {
    let count = 0;

    ratings.forEach((rating) => {
      switch (rating.title) {
        case 'exceptional':
          count += rating.count;
          break;
        case 'recommended':
          count += rating.count;
          break;
      }
    });

    return count;
  }

  getNrOfThumbsDown(ratings: any[]) {
    let count = 0;

    ratings.forEach((rating) => {
      switch (rating.title) {
        case 'meh':
          count += rating.count;
          break;
        case 'skip':
          count += rating.count;
          break;
      }
    });

    return count;
  }
}
