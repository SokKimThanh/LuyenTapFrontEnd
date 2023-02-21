import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Character } from './character.service';

@Component({
  selector: 'app-story-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnChanges {
  @Input() character: Character;
  messages: string;
  @Output() notify: EventEmitter<Character> = new EventEmitter<Character>();
  ngOnChanges(): void {
    this.messages = `You are clicked ${this.character.id}. ${this.character.name}`;
    console.log(this.messages);
  }
  onClick(): void {
    this.notify.emit(this.character);
  }
}
