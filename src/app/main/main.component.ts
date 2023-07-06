import { Component } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  gamesRawData?: any[];
  gamesData!: any[];
  sortingForm!: FormGroup;

  // filteredData!: any[];

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.dataService.dataChanged.subscribe((data) => {
      this.gamesData = data;
    });

    this.sortingForm = this.fb.group({
      sortingCriteria: '',
    });

    this.sortingForm.valueChanges.subscribe((data) => {
      this.dataService.filterData(data.sortingCriteria);
    });
  }
}
