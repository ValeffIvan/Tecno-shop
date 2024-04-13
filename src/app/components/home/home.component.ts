import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categorias: string[] = ['Categoria 1', 'Categoria 2', 'Categoria 3']; // Ejemplo de categorías

  cards = [
    { 
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      imageUrl: '',
      content: 'Contenido de la tarjeta 1'
    },
    { 
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      imageUrl: '',
      content: 'Contenido de la tarjeta 2'
    },
    { 
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      imageUrl: '',
      content: 'Contenido de la tarjeta 3'
    }
    // Puedes agregar más tarjetas según sea necesario
  ]; 

}
