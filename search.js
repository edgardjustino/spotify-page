const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
  fetch('json-server --watch api-artists/artists.json --port 3000')
  .then((response)=> response.json())
  .then((results)=> displayresults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

document.addEventListener('input', function(){
  const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
  if (searchTerm === ''){
    resultPlaylist.classList.add('hidden');
    resultArtists.classList.remove('hidden');
    return;//q não tem nada mais pra acontecer
  }
  requestApi(searchTerm);
});