import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';
import { UtilityService } from '../services/utility.service';
import { Subscription } from 'rxjs';
import { GameDetails } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  id!: any;
  gameData!: any;
  paramsSub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    public utility: UtilityService
  ) {}

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getGameById(+this.id);
    });
  }

  getGameById(id: number) {
    let response = this.dataService.getGameById(id).subscribe((result) => {
      this.gameData = result;
    });

    // let gameData1 = response.g1;
    // response.obs.subscribe((data: any) => {
    //   this.gameData = {
    //     ...gameData1,
    //     description_raw: data.description_raw,
    //     publishers: data.publishers,
    //     website: data.website,
    //   };
    //   console.log(this.gameData);
    // });
  }

  getBackgroundUrl() {
    return `url(${this.gameData.background_image})`;
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }
}
