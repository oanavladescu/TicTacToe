import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; border-radius: 5px; cursor: pointer; }',
  ],
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' | undefined;
}
