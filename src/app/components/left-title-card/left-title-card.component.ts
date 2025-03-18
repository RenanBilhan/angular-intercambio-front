import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-title-card',
  imports: [],
  templateUrl: './left-title-card.component.html',
  styleUrl: './left-title-card.component.css'
})

export class LeftTitleCardComponent {
  @Input() tituloCard: String = '';
}
