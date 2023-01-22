import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // This is an example of a typical service-in-service scenario:
  // The MessageService is injected into the HeroService which is injected into the HeroesComponent
  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]>
    const heroes = of(HEROES);

    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
