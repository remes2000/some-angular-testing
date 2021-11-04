import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../interface/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient
  ) { }

  public getRandomCard(): Observable<Card> {
    return this.http.get<Card>('https://deckofcardsapi.com/api/deck/new/draw/?count=1').pipe(
      map((r: any) => {
        console.log(r.cards[0] as Card);
        return r.cards[0] as Card;
      })
    );
  }
}
