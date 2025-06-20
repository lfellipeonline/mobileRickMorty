import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NavigationStateService } from '../services/navigation-state.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit, OnDestroy {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private navigationStateService: NavigationStateService
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      const id = +characterId;
      
      this.navigationStateService.setActiveCharacterId(id);
      this.apiService.getCharacterDetails(+characterId).subscribe(data => {
        this.character = data;
      });
    }
  }
  ngOnDestroy() {
    this.navigationStateService.setActiveCharacterId(null);
  }
}
