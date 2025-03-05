import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [ CommonModule ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {  

  myImages = [
    {src: '/1.jpeg'},
    {src: "/2.jpeg"},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.10.jpeg"},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.11 (1).jpeg"},
    // {src: "src\assets\imagens\fotos\WhatsApp Image 2025-02-27 at 08.08.11.jpeg"}
  ]
}
