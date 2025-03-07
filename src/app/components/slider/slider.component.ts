import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [ CommonModule ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {  

  myImages = [
    {src: '/1.jpeg', id: 'img1'},
    {src: "/2.jpeg", id: 'img2'},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.10.jpeg"},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.11 (1).jpeg"},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.11.jpeg"}
  ]
}
