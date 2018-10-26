import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = "api/heroes";

  constructor(private messageService: MessageService,
              private httpClient: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    this.log("Fetching heroes");
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }

  private log(message: string) {
    this.messageService.add(`Hero Service:  ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id = ${id}`);
    return of(HEROES.find(hero=> hero.id === id));
  }
}

