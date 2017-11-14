const gamesURL = 'http://localhost:3000/games'
let gameList = document.querySelector('.game-list')
let allButtons = document.querySelector('.all-buttons')

function goHome(gamesURL){
  gameList.innerHTML = ""
  loadGames(gamesURL)
  allButtons.classList.remove('hide')
}

//////////LOAD ALL GAMES
function loadGames(gamesURL) {
  axios.get(gamesURL)
    .then(result => {
      let games = result.data
      games.forEach(e => {
        gameList.innerHTML += gameItem(e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.name, e.notes, e.id, e.tags)
      })
      colorRanges()
    })
    .catch(errors => {
      console.log(errors);
    })
}
loadGames(gamesURL)

///////////ADD GAME
let addGameBtn = document.querySelector('.add-game')
addGameBtn.addEventListener('click', (e) => {
  //LOAD VIEW
  gameList.innerHTML = addGameView()
  allButtons.classList.add('hide')

  //SAVE
  let submit = document.querySelector('#submit')
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let newName = document.querySelector('#game-name-input').value
    let newInterest
    let interestRange = document.getElementsByName('interest')
    for (let i = 0; i < interestRange.length; i++) {
      if (interestRange[i].checked) {
        newInterest = interestRange[i].value
        // return newInterest
        break;
      }
    }

    let newMinPlayer = document.querySelector('#player-min-input').value
    let newMaxPlayer = document.querySelector('#player-max-input').value
    let newMinTime = document.querySelector('#time-min-input').value
    let newMaxTime = document.querySelector('#time-max-input').value
    let newRatingBGG = document.querySelector('#rating-input').value
    let newWeightBGG = document.querySelector('#weight-input').value
    let newNotes = document.querySelector('#notes-input').value

    axios.post(gamesURL, {name: newName, interest: newInterest, minPlayer: newMinPlayer, maxPlayer: newMaxPlayer, minTime: newMinTime, maxTime: newMaxTime, ratingBGG: newRatingBGG, weightBGG: newWeightBGG, notes: newNotes})
      .then(result => {
        goHome(gamesURL)
        console.log(result.data);
      })
      .catch(errors => {
        console.log(errors);
      })
  })

  //CANCEL
  let cancel = document.querySelectorAll('.cancel')
  cancel.forEach(e => {
    e.addEventListener('click', (e) => {
      goHome(gamesURL)
    })
  })


})
