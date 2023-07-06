import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Game, ParentPlatform } from 'src/app/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  platforms = {
    windows: false,
    playstation: false,
    xbox: false,
    apple: false,
    android: false,
    linux: false,
  };

  @Input() gameData!: Game;

  constructor(private router: Router) {}

  ngOnInit() {
    this.activatePlatformIcons();
  }

  onCardClick() {
    let id = this.gameData.id;

    this.router.navigate(['games', id]);
  }

  activatePlatformIcons() {
    let platform_names = this.gameData.parent_platforms.map(
      (p: ParentPlatform) => p.platform.name
    );

    platform_names.forEach((name: any) => {
      if (name.toLowerCase().includes('pc')) this.platforms['windows'] = true;
      else if (name.toLowerCase().includes('playstation'))
        this.platforms['playstation'] = true;
      else if (name.toLowerCase().includes('xbox'))
        this.platforms['xbox'] = true;
      else if (
        name.toLowerCase().includes('macos') ||
        name.toLowerCase().includes('ios') ||
        name.toLowerCase().includes('apple')
      )
        this.platforms['apple'] = true;
      else if (name.toLowerCase().includes('android'))
        this.platforms['android'] = true;
      else if (name.toLowerCase().includes('linux'))
        this.platforms['linux'] = true;
    });
  }
}
