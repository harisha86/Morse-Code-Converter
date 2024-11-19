import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MorseService } from './morse.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h1 class="title">Morse Code Converter</h1>
      
      <div class="input-group">
        <label for="textInput">Enter text to convert:</label>
        <input
          id="textInput"
          type="text"
          [(ngModel)]="inputText"
          (ngModelChange)="onInputChange()"
          placeholder="Type something..."
        >
      </div>

      <div class="output-group">
        <p class="output-label">Morse Code:</p>
        <div class="output">{{ morseOutput }}</div>
      </div>
    </div>
  `
})
export class App {
  inputText = '';
  morseOutput = '';

  constructor(private morseService: MorseService) {}

  onInputChange() {
    this.morseOutput = this.morseService.convertToMorse(this.inputText);
  }
}

bootstrapApplication(App, {
  providers: [MorseService]
});