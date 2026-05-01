import '@fortawesome/fontawesome-free/css/all.css';

import plato2 from 'url:./images/espagueti-pesto.jpg?width=220';
import plato3 from 'url:./images/lasagne.jpg?width=220';
import plato1 from 'url:./images/maca-bolonesa.jpg?width=220';
import plato4 from 'url:./images/osobuco_milanesa.jpg?width=220';
import plato5 from 'url:./images/pizza_fungi.jpg?width=220';
import plato6 from 'url:./images/tiramisu.jpg?width=220';

const platos = [
  {
    src: plato1,
    alt: 'Plato de macarrones a la boloñesa',
  },
  {
    src: plato2,
    alt: 'Plato de espaguetis al pesto',
  },
  {
    src: plato3,
    alt: 'Plato de lasaña',
  },
  {
    src: plato4,
    alt: 'Cazuela de ossobuco a la milanesa',
  },
  {
    src: plato5,
    alt: 'Pizza funghi',
  },
  {
    src: plato6,
    alt: 'Plato de tiramisú',
  },
];

const anime = document.getElementById('plato-volante');

anime.addEventListener('animationiteration', () => {
  const aleatorio = Math.floor(Math.random() * platos.length);
  anime.src = platos[aleatorio].src;
  anime.alt = platos[aleatorio].alt;
  //console.log('anime.src : ' + anime.src);
});
