import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStateService } from '../services/navigation-state.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit, OnDestroy {

  // Variável para controlar a visibilidade da aba
  showDetailsTab = false;
  // Variável para guardar a URL dinâmica da aba
  detailsTabUrl = '';

  private stateSubscription!: Subscription;

  constructor(private navigationStateService: NavigationStateService) {}

  ngOnInit() {
    this.stateSubscription = this.navigationStateService.activeCharacterId$.subscribe(id => {
      // Se o ID não for nulo, mostrar
      this.showDetailsTab = id !== null;
      if (id) {
        this.detailsTabUrl = `/tabs/tab2/${id}`;
      }
    });
  }

  ngOnDestroy() {
    // Evita explodir seu PC
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }
}
