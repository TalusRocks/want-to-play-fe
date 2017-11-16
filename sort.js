//wrap in a function to fire when sort is clicked (do that in main.js)

function sortGames() {
  let sortByP = document.querySelectorAll('.sortby')

  let selectedArr = []
  //move in and out of selected array
  sortByP.forEach(el => {
    el.addEventListener('click', (evt) => {
      let sortItem = evt.srcElement
      //if it is to BE selected..
      if (!sortItem.classList.contains('selected')) {
        sortItem.classList.add('selected')
        let sortObj = {id: sortItem.id, text: sortItem.textContent}
        selectedArr.push(sortObj)
      } else {
        //if it is to be UNselected..
        sortItem.classList.remove('selected')
        //where id matches, remove from selected array
        selectedArr.forEach(e => {
          if (e.id === sortItem.id) {
            let index = selectedArr.indexOf(e)
            selectedArr.splice(index, 1)
          }
        })
      }
      loadSelected(selectedArr)
    })
  })

  let sortByDiv = document.querySelector('.all-sortby')
  let thenByDiv = document.querySelector('.all-thenby')
  //populate html, according to selected array
  function loadSelected(selectedArr) {
    sortByDiv.innerHTML = ""
    for(let i = 0; i < selectedArr.length; i++)
      sortByDiv.innerHTML += `<p class="sortby mtb-1" id="${selectedArr[i].id}">${selectedArr[i].text}</p>`
  }

  //Capture selectedArr on submit
  //and persist to localStorage
  let sortSubmit = document.querySelector('#sort')
  sortSubmit.addEventListener('click', (e) => {
    gameList.innerHTML = loadSorted(selectedArr)
    allButtons.classList.remove('hide')
    localStorage.setItem('selectedSortArr', JSON.stringify(selectedArr))
  })

  //Cancel
  cancelAndGoHome(gamesURL)


}


let currentSortDiv = document.querySelector('.current-sort')
///LOAD AS SORTED
function loadSorted(selectedArr){

  axios.get(gamesURL)
    .then(result => {
      let sortThis = result.data

      //loop over sort array BACKWARDS
      for (let i = selectedArr.length - 1; i >= 0 ; i--) {

        if (selectedArr[i].id === "interest-desc") {
          sortThis.sort(function(a, b) {
            return b.interest - a.interest
          })
        }
        if (selectedArr[i].id === "rating-desc") {
          sortThis.sort(function(a, b) {
            return b.ratingBGG - a.ratingBGG
          })
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

      //add current sort to Games View
      let savedSort = JSON.parse(localStorage.getItem('selectedSortArr'))
      let sArr = []
      savedSort.forEach(e => { sArr.push(e.text) })
      savedSort = sArr.join(', ')
      currentSortDiv.innerHTML += sortingBy(savedSort)

      //add Games
      sortThis.forEach(e => {
        gameList.innerHTML += gameItem(e.name, e.interest, e.minPlayer, e.maxPlayer, e.minTime, e.maxTime, e.ratingBGG, e.weightBGG, e.notes, e.tags, e.id)
      })
      colorRanges()

      clearSortStorage()
    }) //close THEN
}

//remove "sorting by" from DOM and clear localStorage
function clearSortStorage() {
  let clearSortbyX = document.querySelector('.clear-sortby')
  clearSortbyX.addEventListener('click', (e) => {
    localStorage.removeItem('selectedSortArr')
    currentSortDiv.innerHTML = ""
  })
}
