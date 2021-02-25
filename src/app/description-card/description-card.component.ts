import { Component, Input, OnInit } from '@angular/core';
import { DescriptionItem } from '../models/song';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {

  @Input('descriptions') array: DescriptionItem[];
  @Input('time') time: number;

  constructor() { }

  ngOnInit(): void {
    if (!this.array || !this.time || this.array.length == 0) {
      throw new Error('Cannot load this component without time or array');
    }
  }
  
  public get previousLyric() : string {
    let index = this.currentIndex();
    if(index < 1) {
      return "...";
    }
    return this.array[index - 1].text;
  }

  public get currentLyric(): string {
    let index = this.currentIndex();
    return this.array[index].text;
  }

  
  public get nextLyric() : string {
    let index = this.currentIndex();
    console.log(index);
    if(index >= this.array.length) {
      return "...";
    }
    return this.array[index + 1].text;
  }
  
  private currentIndex() : number {
    let index = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (this.time > this.array[i].timestamp) {
        index = i;
      } else {
        break;
      }
    }
    return index;
  }

  isArabic(text) {
    let pattern = /[\u0600-\u06FF\u0750-\u077F]/;
    let result = pattern.test(text);
    return result;
  }

}
