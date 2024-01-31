const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
  fetch
}

document.addEventListener('input', function(){
  const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
  if (searchTerm === ''){
    resultPlaylist.classList.add('hidden');
    resultArtists.classList.remove('hidden');
    return;//q não tem nada mais pra acontecer
  }
});