import { Component, Input } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  @Input() public uneStatistique!:Statistique;

  public tabStatistiques: Statistique[] = [];

  constructor(public singletonStatistiques : StatistiqueService) { 
    this.tabStatistiques = this.singletonStatistiques.tabStatistiques;
  }

  supprimer(statistique: Statistique) {
    let index = this.tabStatistiques.indexOf(statistique);
    if (index != -1) {
      this.tabStatistiques.splice(index, 1);
    }
  }
  
}
