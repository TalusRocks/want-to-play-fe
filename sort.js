//wrap in a function to fire when sort is clicked (do that in main.js)

let sortByButton = document.querySelectorAll('.sortby')

let selectedArr = []


sortByButton.forEach(el => {
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

function loadSelected(selectedArr) {
  sortByDiv.innerHTML = ""
  for(let i = 0; i < selectedArr.length; i++)
    sortByDiv.innerHTML += `<p class="sortby mtb-1" id="${selectedArr[i].id}">${selectedArr[i].text}</p>`
}
