const content = document.querySelector('.movies');
const mainContainer = document.querySelector('.movie-box');

function renderMovie (movie) {
    const createContainer = document.createElement('div');
    const createImage = document.createElement('img');
    const createTitle = document.createElement('h2');
    const createP = document.createElement('p');

    createContainer.classList.add('movie-box');
    content.appendChild(createContainer);

    createImage.classList.add('circle-img');
    createImage.setAttribute('src', '/SRC/IMG/image 3.svg');
    createContainer.appendChild(createImage);

    createTitle.textContent = 'Batman (2022)';
    createContainer.appendChild(createTitle);

    




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