import { Component, OnInit } from '@angular/core';
import { Card } from '../interface/card';
import { CardService } from '../service/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public card: Card;
  public cardShape: string;
  public shapes = {
    SPADES: '\u2660',
    DIAMONDS: '\u2666',
    HEARTS: '\u2665',
    CLUBS: '\u2663'
  }

  constructor(
    public cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  public getRandomCard() {
    this.cardService.getRandomCard().subscribe((card) => {
      this.card = card;
      this.cardShape = this.shapes[card.suit];
    });
  }
}
