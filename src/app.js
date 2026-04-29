console.log('Hello world!');
import '@fortawesome/fontawesome-free/css/all.css';

import plato2 from 'url:./images/espagueti-pesto.jpg?width=220';
import plato3 from 'url:./images/lasagne.jpg?width=220';
import plato1 from 'url:./images/maca-bolonesa.jpg?width=220';
import plato4 from 'url:./images/osobuco_milanesa.jpg?width=220';
import plato5 from 'url:./images/pizza_fungi.jpg?width=220';
import plato6 from 'url:./images/tiramisu.jpg?width=220';

const platos = [plato1, plato2, plato3, plato4, plato5, plato6];

const anime = document.getElementById('plato-volante');
console.log('Imagen Id: ' + anime.id);

anime.addEventListener('animationiteration', () => {
  const aleatorio = Math.floor(Math.random() * platos.length);
  anime.src = platos[aleatorio];
  console.log('anime.src : ' + anime.src);
});
