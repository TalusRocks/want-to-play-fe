const gamesURL = 'http://localhost:3000/games'
let gameList = document.querySelector('.game-list')
let allButtons = document.querySelector('.all-buttons')

/////////GENERAL USE
function cancelAndGoHome(gamesURL) {
  let cancel = document.querySelectorAll('.cancel')
  cancel.forEach(e => {
    e.addEventListener('click', (e) => {
      goHome(gamesURL)
    })
  })
}

function goHome(gamesURL) {
  gameList.innerHTML = ""
  return loadGames(gamesURL).then(() => {
    allButtons.classList.remove('hide')
  })
}

//////////LOAD ALL GAMES
function loadGames(gamesURL) {
  return axios.get(gamesURL)
    .then(result => {
      let games = result.data
      games.forEach(e => {
        gameList.innerHTML += gameItem(e.name, e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.notes, e.tags, e.id)
      })
      colorRanges()

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
///////****************TURN IT ON************//////
loadGames(gamesURL)


///////////CREATE GAME
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

function goToAnchor(gamesURL, name) {
  return window.location.href = `http://127.0.0.1:8080/#${name}`;
}

///////////EDIT GAME
function editGame(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId) {

  //LOAD VIEW
  gameList.innerHTML = editGameView(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId)
  allButtons.classList.add('hide')

  //listen for submit
  //!!!!!!!!! copied from submit, with only a change in url !!!!!!
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
}

//////////SORT LISTENER
let sortButton = document.querySelector('.sort')
sortButton.addEventListener('click', (e) => {
  gameList.innerHTML = ""
  gameList.innerHTML = sortGamesView()
  allButtons.classList.add('hide')
  sortGames()
})

///LOAD AS SORTED

let searchObj = {
  interest: "interest",
  rating: "ratingBGG",
  players: "maxPlayer"
}
const ascSort = (a, b) => b - a
const descSort = (a, b) => a - b

function loadSorted(selectedArr){

  axios.get(gamesURL)
    .then(result => {
      let sortThis = result.data

      //loop over sort array to find what to sort by
      for (let i = 0; i < selectedArr.length; i++) {

        if (selectedArr[i].id === "interest-desc") {
          sortThis.sort(function(a, b) {
            return b.interest - a.interest
          })
          console.log(sortThis, "after interest sort");
        }
        if (selectedArr[i].id === "rating-desc") {
          sortThis.sort(function(a, b) {
            return b.ratingBGG - a.ratingBGG
          })
          console.log(sortThis, "after rating sort");
        }
        if (selectedArr[i].id === "players-asc") {
          sortThis.sort(function(a, b) {
            return a.maxPlayer - b.maxPlayer
          })
        }
        if (selectedArr[i].id === "players-desc") {
          sortThis.sort(function(a, b) {
            return b.maxPlayer - a.maxPlayer
          })
        }
        if (selectedArr[i].id === "time-asc") {
          sortThis.sort(function(a, b) {
            return a.maxTime - b.maxTime
          })
        }
        if (selectedArr[i].id === "time-desc") {
          sortThis.sort(function(a, b) {
            return b.maxTime - a.maxTime
          })
        }

      }

      sortThis.forEach(e => {
        gameList.innerHTML += gameItem(e.name, e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.notes, e.tags, e.id)
      })
      colorRanges()
    }) //close THEN

}

//MATT's CODE
//       console.log(selectedArr)
//       let sortParam = el.id.split('-')
//       let sortTypes = selectedArr.map(el => searchObj[sortParam[0]])
//
//       let someOtherName = sortTypes.reduce((sortedArr, sortType, index, arr) => {
//         console.log(sortedArr);
//       	sortedArr.sort(function(a, b) {
//       		if(index > 0 && a[arr[index - 1]] == b[arr[index - 1]]) {
//       			return a[sortType] - b[sortType];
//       		} else if (index === 0) {
//       			return a[sortType] - b[sortType];
//       		} else {
//       			return 0;
//       		}
//       	})
//
//       	return sortedArr
//       }, sortThis)
// console.log(someOtherName);


/////////////////////////////////////////////////////
