import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  estudante = {
    name: 'Luiz Felipe Rodrigues de Melo',
    email: 'mail.lfellipe@gmail.com',
    curso: 'Análise e Desenvolvimento de Sistemas',
    website: 'lfellipestudios.netlify.app',
  };

  constructor() {}

}
