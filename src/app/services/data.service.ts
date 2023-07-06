import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { Subject } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  rawGamesData!: any[];
  gamesData!: any[];
  dataChanged: Subject<any[]> = new Subject<any[]>();

  constructor(
    private networkService: NetworkService,
    private utility: UtilityService
  ) {
    this.networkService.fetchData().subscribe((response) => {
      this.rawGamesData = [...response.results];
      this.gamesData = [...this.rawGamesData];
      console.log(this.gamesData);
      // console.log(this.rawGamesData);
      this.dataChanged.next([...this.gamesData]);
    });

    this.networkService.getPlatformData(6).subscribe((response) => {
      console.log('Platform Data:');
      console.log(response);
    });
  }

  changeGamesData(value: string) {
    this.gamesData = this.rawGamesData.filter((game) =>
      game.name.includes(value)
    );
    this.dataChanged.next([...this.gamesData]);
  }

  filterData(criteria: string) {
    let aux = [...this.rawGamesData];

    if (criteria === 'Name') {
      this.gamesData = this.utility.sortByName(aux);
    } else if (criteria === 'Released') {
      this.gamesData = this.utility.sortByReleaseData(aux);
    } else if (criteria === 'Added') {
      this.gamesData = this.utility.sortByAdded(aux);
    } else if (criteria === 'Updated') {
      this.gamesData = this.utility.sortByUpdateDate(aux);
    } else if (criteria === 'Rating') {
      this.gamesData = this.utility.sortByRating(aux);
    } else if (criteria === '') {
      this.gamesData = [...this.rawGamesData];
    }

    console.log(this.gamesData);

    this.dataChanged.next([...this.gamesData]);
  }

  getGameById(id: number) {
    let gameData1 = this.rawGamesData.find((game) => game.id == id);

    return { g1: gameData1, obs: this.networkService.getPlatformData(id) };
  }
}
