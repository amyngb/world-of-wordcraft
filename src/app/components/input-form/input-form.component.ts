import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Output() wordArrayEvent = new EventEmitter<string[]>();
  inputForm = new FormGroup({
    inputText: new FormControl(''),
  });

  public onSubmit() {
    const wordArray: string[] = this.inputForm.value.inputText.split(' ');
    this.wordArrayEvent.emit(wordArray);
  }
}