//////////CHOOSE OPTIONS IN SORT VIEW//////////
function sortGames() {
  let sortByP = document.querySelectorAll('.sortby')
  ////////MANIPULATE "SELECTED ARRAY"
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
  ///////WRITE SELECTED ARRAY TO HTML
  function loadSelected(selectedArr) {
    sortByDiv.innerHTML = ""
    for(let i = 0; i < selectedArr.length; i++) {
      sortByDiv.innerHTML += `<p class="sortby mtb-1" id="${selectedArr[i].id}">${selectedArr[i].text}</p>`
    }
  }

  ////////***SUBMIT***////////
  let sortSubmit = document.querySelector('#sort')
  sortSubmit.addEventListener('click', (e) => {
    ////////WRITE SORTED GAMES TO HTML
    loadSorted(selectedArr).then(() => {
      allButtons.classList.remove('hide')
    })
  })

  //Cancel
  cancelAndGoHome(gamesURL)

}

//*global variable
let currentSortDiv = document.querySelector('.current-sort')
///////////////////LOAD SORTED GAMES//////////////////////
function loadSorted(selectedArr){
  return axios.get(gamesURL)
    .then(result => {
      let sortThis = result.data

      // What about refactoring out that sort function which is the
      // same for everything except the key is different? You can
      // do so with a closure!
      function sorter (key, asc=true) {
        return (a, b) => asc ? a[key] - b[key] : b[key] - a[key]
      }
      
      ////////SORT GAMES
      //loop over sort array BACKWARDS
      for (let i = selectedArr.length - 1; i >= 0 ; i--) {
        // Let's also refactor out the selectedArr[i] part.
        const { id } = selectedArr[i]
        
        // We could also refactor this part even further but it'd start to
        // get kind of tricky. Let me know if you want to discuss.  :)
        if (id === "interest-desc") sortThis.sort(sorter('interest', false))
        if (id === "rating-desc") sortThis.sort(sorter('ratingBGG', false))
        if (id === "players-asc") sortThis.sort(sorter('maxPlayer', true))
        if (id === "players-desc") sortThis.sort(sorter('maxPlayer', false))
        if (id === "time-asc") sortThis.sort(sorter('maxTime', true))
        if (id === "time-desc") sortThis.sort(sorter('interest', false))

      }

      ////ADD CURRENT SORT TO GAMES VIEW
      // If you're thinking of where to add OOP on the frontend, starting
      // with local storage is a great idea. Imagine a LocalStorage class
      // with some of the same method names.
      localStorage.setItem('selectedSortArr', JSON.stringify(selectedArr))
      let savedSort = JSON.parse(localStorage.getItem('selectedSortArr'))
      let sArr = []
      savedSort.forEach(e => { sArr.push(e.text) })
      savedSort = sArr.join(', ')
      currentSortDiv.innerHTML += sortingBy(savedSort)

      //////ADD SORTED GAMES TO HTML
      gameList.innerHTML = ""
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
