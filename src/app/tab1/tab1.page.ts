import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  items: any[] = [
    {
      nombre: 'La vida es bella',
      year: '1995',
      resumen: 'Una bella historia de supervivencia y superacion',
      imgUrl: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/61/66/20098979.jpg'
      
    },
    {
      nombre: 'Mejor imposible',
      year: '2001',
      resumen: 'Comedia excentrica',
      imgUrl: 'https://pics.filmaffinity.com/as_good_as_it_gets-781799951-mmed.jpg'
    },
    {
      nombre: 'Los asesinos de la luna',
      year: '2023',
      resumen: 'Western',
      imgUrl: 'https://pics.filmaffinity.com/killers_of_the_flower_moon-211527208-mmed.jpg'
    },
    {
      nombre: 'Campeones',
      year: '2018',
      resumen: 'Comedia/Deportes',
      imgUrl: 'https://pics.filmaffinity.com/campeones-981723931-mmed.jpg'
    },
  ]

  constructor() {}

}
