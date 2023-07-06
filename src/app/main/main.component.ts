import { Component } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Game } from '../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  gamesRawData?: Game[];
  gamesData!: Game[];
  sortingForm!: FormGroup;

  // filteredData!: any[];

  constructor(
    private dataService: DataService,
    private networkService: NetworkService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.dataService.dataChanged.subscribe((data: Array<Game>) => {
      this.gamesData = data;
    });

    this.sortingForm = this.fb.group({
      sortingCriteria: '',
    });

    this.sortingForm.valueChanges.subscribe((data) => {
      this.dataService.filterData(data.sortingCriteria);
      // this.dataService.filterData(data.sortingCriteria);
    });
  }
}
