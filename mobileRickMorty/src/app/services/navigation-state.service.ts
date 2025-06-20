import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationStateService {

  // BehaviorSubject para armazenar o ID do personagem ativo. Inicia como null.
  private activeCharacterIdSource = new BehaviorSubject<number | null>(null);

  // Observable público para que os componentes possam se inscrever.
  public activeCharacterId$ = this.activeCharacterIdSource.asObservable();

  constructor() { }

  /**
    @param id
   */
  setActiveCharacterId(id: number | null) {
    this.activeCharacterIdSource.next(id);
  }
}
