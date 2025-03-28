import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';
import { LeftTitleCardComponent } from '../left-title-card/left-title-card.component';


@Component({
  selector: 'app-home',
  imports: [ CommonModule , HeaderComponent , FooterComponent , SliderComponent , LeftTitleCardComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  atribuirTituloCard1 = "Intercambio de idiomas";
  atribuirTituloCard2 = "Intercambio acadêmico";
  name = "Renan";
  idButton = 1;
  deveMostrarTitulo = true;
  listItems = [{id:"dromedario"}, {id: "camelo"},{id: "hipopotamo"}];
  // atualizaBoleano(valor: boolean){
  //   this.meuBoleano = valor;
  // }
  logEvent(event:any){
    console.log(event);
  }


}
