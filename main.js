const gamesURL = 'https://want-to-play.herokuapp.com/games'
let gameList = document.querySelector('.game-list')
let allButtons = document.querySelector('.all-buttons')

/////////CANCEL AND GO HOME
function cancelAndGoHome(gamesURL) {
  let cancel = document.querySelectorAll('.cancel')
  cancel.forEach(e => {
    e.addEventListener('click', (e) => {
      goHome(gamesURL)
    })
  })
}
////GO HOME
function goHome(gamesURL) {
  gameList.innerHTML = ""
  return loadGames(gamesURL).then(() => {
    allButtons.classList.remove('hide')
  })
}

////////////////////LOAD ALL GAMES//////////////////////
function loadGames(gamesURL) {
  return axios.get(gamesURL)
    .then(result => {
      let games = result.data
      games.forEach(e => {
        gameList.innerHTML += gameItem(e.name, e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.notes, e.tags, e.id)
      })
      colorRanges()
      localStorage.removeItem('selectedSortArr')

      let gameEditLink = document.querySelectorAll('.title')
      for (let i = 0; i < gameEditLink.length; i++) {
        gameEditLink[i].addEventListener('click', (e) => {
          let thisData = result.data[i]
          editGame(thisData.name, thisData.interest, thisData.minPlayer, thisData.maxPlayer, thisData.minTime, thisData.maxTime, thisData.ratingBGG, thisData.weightBGG, thisData.notes, thisData.tags, thisData.id)
        })
      }
    })
    .catch(errors => {
      console.log(errors);
    })
}
//****************TURN IT ON************
loadGames(gamesURL)


///////////////////////CREATE GAME////////////////////////
let addGameBtn = document.querySelector('.add-game')
addGameBtn.addEventListener('click', (e) => {
  //LOAD VIEW
  gameList.innerHTML = addGameView()
  allButtons.classList.add('hide')

  //SAVE
  let submit = document.querySelector('#submit')
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('#game-name-input').value
    let interest
    let interestRange = document.getElementsByName('interest')
    for (let i = 0; i < interestRange.length; i++) {
      if (interestRange[i].checked) {
        interest = interestRange[i].value
        break;
      }
    }
    let minPlayer = document.querySelector('#player-min-input').value
    let maxPlayer = document.querySelector('#player-max-input').value
    let minTime = document.querySelector('#time-min-input').value
    let maxTime = document.querySelector('#time-max-input').value
    let ratingBGG = document.querySelector('#rating-input').value
    let weightBGG = document.querySelector('#weight-input').value
    let notes = document.querySelector('#notes-input').value
    let tags = document.querySelector('#tags-input').value
    tags = tags.split(',')

    axios.post(gamesURL, {name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags})
      .then(result => {
        return goHome(gamesURL)
      })
      .then(result => {
        goToAnchor(gamesURL, name)
      })
      .catch(errors => {
        console.log(errors);
      })
  })

  //CANCEL
  cancelAndGoHome(gamesURL)

})

//////////GO TO ANCHOR
function goToAnchor(gamesURL, name) {
  return window.location.href = `http://127.0.0.1:8080/#${name}`;
}

////////////////////////EDIT GAME////////////////////////
function editGame(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId) {

  ///LOAD EDIT VIEW
  gameList.innerHTML = editGameView(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId)
  allButtons.classList.add('hide')

  //listen for submit
  //!!!!!!copied from create, url change, can be pulled out
  ///////////GET FORM VALUES
  let submit = document.querySelector('#submit')
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('#game-name-input').value
    let interest
    let interestRange = document.getElementsByName('interest')
    for (let i = 0; i < interestRange.length; i++) {
      if (interestRange[i].checked) {
        interest = interestRange[i].value
        break;
      }
    }
    let minPlayer = document.querySelector('#player-min-input').value
    let maxPlayer = document.querySelector('#player-max-input').value
    let minTime = document.querySelector('#time-min-input').value
    let maxTime = document.querySelector('#time-max-input').value
    let ratingBGG = document.querySelector('#rating-input').value
    let weightBGG = document.querySelector('#weight-input').value
    let notes = document.querySelector('#notes-input').value
    let tags = document.querySelector('#tags-input').value
    tags = tags.split(',')

    /////POST TO DATABASE
    axios.put(`${gamesURL}/${gameId}`, {name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags})
      .then(result => {
        return goHome(gamesURL)
      })
      .then(result => {
        goToAnchor(gamesURL, name)
      })
      .catch(errors => {
        console.log(errors);
      })
  })

  //listen for delete
  let deleteButton = document.querySelector('#delete')
  deleteButton.addEventListener('click', (e) => {
    deleteGame(gameId)
  })

  //CANCEL
  cancelAndGoHome(gamesURL)
}

//////////DELETE
function deleteGame(gameId) {
  axios.delete(`${gamesURL}/${gameId}`)
    .then(result => {
      goHome(gamesURL)
    })
    .catch(errors => {
      console.log(errors, "in delete route");
    })
}

//////////SORT LISTENER
let sortButton = document.querySelector('.sort')
sortButton.addEventListener('click', (e) => {
  gameList.innerHTML = ""
  gameList.innerHTML = sortGamesView()
  allButtons.classList.add('hide')
  sortGames()
})

//////////FILTER LISTENER
let filterButton = document.querySelector('.filter')
filterButton.addEventListener('click', (e) => {
  gameList.innerHTML = ""
  gameList.innerHTML = filterGamesView()
  allButtons.classList.add('hide')
  filterGames()
})
