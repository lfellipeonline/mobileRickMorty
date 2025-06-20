import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  characters: any[] = [];
  currentPage = 1;

  constructor(private apiService: ApiService, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.apiService.getCharacters(this.currentPage).subscribe(
      (data) => {
        this.characters = this.characters.concat(data.results);
        if (event) {
          (event as InfiniteScrollCustomEvent).target.complete();
        }
      },
      (error) => {
        console.error('Erro ao buscar personagens:', error);
        if (event) {
          (event as InfiniteScrollCustomEvent).target.complete();
        }
      }
    );
  }

  loadMore(event: any) {
    this.currentPage++;
    this.loadCharacters(event);
  }

  showDetails(characterId: number) {
    this.navCtrl.navigateForward(`/tabs/tab2/${characterId}`);
  }
}
