const baseURL = 'http://localhost:3000/games'
let gameList = document.querySelector('.game-list')

function loadGames(baseURL) {
  axios.get(baseURL)
    .then(result => {
      let games = result.data
      games.forEach(e => {
        gameList.innerHTML += gameItem(e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.name, e.notes)
      })
    })
    .catch(errors => {
      console.log(errors);
    })
}
loadGames(baseURL)
