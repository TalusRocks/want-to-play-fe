function filterGames() {

  //on submit, run load function with object as parameter
  let submitFilter = document.querySelector('#submit')
  submitFilter.addEventListener('click', (e) => {
    e.preventDefault()

    //detect all form values
    let minInterest
    let interestRange = document.getElementsByName('min-interest-input')
    for (let i = 0; i < interestRange.length; i++) {
      if (interestRange[i].checked) {
        minInterest = interestRange[i].value
        break;
      }
    }
    let numPlayer = document.querySelector('#player-num-input').value
    let maxTime = document.querySelector('#time-max-input').value
    let minRating = document.querySelector('#rating-min-input').value
    let minWeight = document.querySelector('#weight-min-input').value
    let maxWeight = document.querySelector('#weight-max-input').value

    //put into object they I want it
    let filterObj = {
      interest: { min: minInterest },
      player: { num: numPlayer },
      time: { max: maxTime },
      rating: { min: minRating },
      weight: { min: minWeight, max: maxWeight }
    }

    loadFilteredGames(filterObj).then(() => {
      allButtons.classList.remove('hide')
    })
  })

  //Cancel
  cancelAndGoHome(gamesURL)
}

function loadFilteredGames(filterObj) {
  ////check if sorted, then sort THAT if yes

  return axios.get(gamesURL)
    .then(result => {
      let filterThis = result.data

      //////FILTER GAMES
      if (filterObj.interest.min) {
        filterThis = filterThis.filter(el => el.interest >= filterObj.interest.min)
      }
      if (filterObj.player.num) {
        filterThis = filterThis.filter(el => el.maxPlayer > filterObj.player.num)
      }
      if (filterObj.time.max) {
        filterThis = filterThis.filter(el => el.minTime < filterObj.time.max)
      }
      if (filterObj.rating.min) {
        filterThis = filterThis.filter(el => el.ratingBGG > filterObj.rating.min)
      }
      if (filterObj.weight.min) {
        filterThis = filterThis.filter(el => el.weightBGG > filterObj.weight.min)
      }
      if (filterObj.weight.max) {
        filterThis = filterThis.filter(el => el.weightBGG < filterObj.weight.max)
      }

      /////////ADD FILTERED GAMES TO HTML
      gameList.innerHTML = ""
      filterThis.forEach(e => {
        gameList.innerHTML += gameItem(e.name, e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.notes, e.tags, e.id)
      })
      colorRanges()

    })//end THEN


}
