import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      title: '',
    });
  }

  onSearch() {
    this.dataService.changeGamesData(this.searchForm.get('title')?.value);
  }
}
