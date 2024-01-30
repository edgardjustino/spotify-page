const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

document.addEventListener('input', function(){
  const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
  if (searchTerm === ''){
    resultPlaylist.classList.add('hidden');
    resultArtists.classList.remove('hidden');
  }
});