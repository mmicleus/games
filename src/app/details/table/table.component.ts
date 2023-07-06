import { Component, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

enum SelectedPage {
  About = 0,
  Screenshot,
  Trailers,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() gameData: any;
  currentPage: SelectedPage = SelectedPage.About;

  constructor(public utility: UtilityService) {}

  ngOnInit() {
    console.log(this.gameData);
  }

  pageSelected(nr: number) {
    this.currentPage = nr;
  }
}
