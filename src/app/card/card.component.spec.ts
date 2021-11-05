import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Card } from '../interface/card';
import { CardService } from '../service/card/card.service';

import { CardComponent } from './card.component';

interface CardTextTestCase {
  card: Card,
  cardShape: string
}

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cardServiceSpy: jasmine.SpyObj<CardService>;
  const getButton = (): DebugElement => {
    return fixture.debugElement.query(By.css('button'));
  }
  const createCard = (suit: string) => {
    return {
      suit
    } as Card;
  }

  beforeEach(async(() => {
    cardServiceSpy = jasmine.createSpyObj('CardService', ['getRandomCard']);
    cardServiceSpy.getRandomCard.and.returnValue(of({} as Card));

    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [
        { provide: CardService, useValue: cardServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch card from api when button clicked', () => {
    fixture.detectChanges();
    const button = getButton();
    expect(button).toBeTruthy('Button does not exist');
    button.triggerEventHandler('click', null);
    expect(cardServiceSpy.getRandomCard.calls.count()).toBe(1, 'getRandomCard got called more or less than once');
  });

  describe('should show correct icon', () => {
    const testCases: CardTextTestCase[] = [
      { card: createCard('SPADES'), cardShape: '\u2660' },
      { card: createCard('DIAMONDS'), cardShape: '\u2666' },
      { card: createCard('HEARTS'), cardShape: '\u2665' },
      { card: createCard('CLUBS'), cardShape: '\u2663' }
    ];

    testCases.forEach((testCase) => {
      describe(`when card suit ${testCase.card.suit}`, () => {
        beforeEach(() => {
          cardServiceSpy.getRandomCard.and.returnValue(of(testCase.card));
          component.getRandomCard();
          fixture.detectChanges();
        });
        
        it(`has ${testCase.cardShape} in template`, () => {
          expect(fixture.nativeElement.textContent).toContain(testCase.cardShape);
        });

        it(`has ${testCase.cardShape} set as cardShape variable`, () => {
          expect(component.cardShape).toBe(testCase.cardShape);
        });
      });
    });
  });

  it('should show KING text when card is king', () => {
    cardServiceSpy.getRandomCard.and.returnValue(of({ suit: 'SPADES', value: 'KING' } as Card));
    component.getRandomCard();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('KING');
  });
});
