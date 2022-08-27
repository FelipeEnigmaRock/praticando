const content = document.querySelector('.movies');

async function getPopularMovies() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=7ff89e27e29590850bbe7b2cf7f4789a&language=en-US&page=1';
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  console.log (results);
}

getPopularMovies();

function renderMovie (movie) {
  const createContainer = document.createElement('div');
  const secondContainer = document.createElement('div');
  const thirdContainer = document.createElement('div');
  const createImage = document.createElement('img');
  const starImage = document.createElement('img');
  const heartImage = document.createElement('img');
  const createTitle = document.createElement('h2');
  const createP4Second = document.createElement('p');
  const createP4third = document.createElement('p');
  const createPfourth = document.createElement('p');


  createContainer.classList.add('movie-box');
  content.appendChild(createContainer);

  createImage.classList.add('circle-img');
  createImage.setAttribute('src', '/SRC/IMG/image 3.svg');
  createContainer.appendChild(createImage);

  createTitle.textContent = 'Batman (2022)';
  secondContainer.appendChild(createTitle);

  secondContainer.classList.add('movie-title');
  createContainer.appendChild(secondContainer);

  thirdContainer.classList.add('avaliation-box');
  secondContainer.appendChild(thirdContainer);

  starImage.classList.add('second');
  starImage.setAttribute('src', '/SRC/IMG/Star.svg');
  thirdContainer.appendChild(starImage);

  createP4Second.textContent = '9.0';
  thirdContainer.appendChild(createP4Second);

  heartImage.classList.add('third');
  heartImage.setAttribute('src', '/SRC/IMG/Eheart.svg');
  thirdContainer.appendChild(heartImage);

  createP4third.textContent = 'Favoritar';
  thirdContainer.appendChild(createP4third);

  createPfourth.textContent = 'Texto gigante Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing';
  createContainer.appendChild(createPfourth);

}


renderMovie();










const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.4,
      year: 2022,
      description: 'Descrição do filme…',
      isFavorited: true,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.6,
      year: 2019,
      description: 'Descrição do filme…',
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.0,
      year: 2022,
      description: 'Descrição do filme…',
      isFavorited: false
    },
  ]