//wrap in a function to fire when sort is clicked (do that in main.js)

//in THENBY listen for click on checkbox (or "checked?"),
//remove from THENBY and move to SORTBY (checked)
let checkboxInputs = document.querySelectorAll('input[name="sortby"]')

let sortByDiv = document.querySelector('.all-sortby-checkboxes')
let thenByDiv = document.querySelector('.all-thenby-checkboxes')



function isChecked() {
  let sortByArr = []
  let thenByArr = []
  checkboxInputs.forEach(e => {
    // console.log(e);
    if(e.checked){
      sortByArr.push(e.value)
    }
    console.log(sortByArr);
  })

}

let checkboxes = document.querySelectorAll('.sort-var')

checkboxes.forEach(e => {
  e.addEventListener('click', (e) => {
    e.preventDefault()
    const label = e.target.getAttribute('for')
    document.querySelector(`#${label}`).checked = true
    isChecked()
  })
})


// for (let i = 0; i < checkboxes.length; i++) {
//   checkboxes[i].addEventListener('click', (e) => {
//     console.log("clicko");
//
//     // isChecked()
//   })
// }




//${interest == '1' ? 'checked' : ''}

//in SORTBY listen for click on checkbox,
//remove from SORTBY and move to THENBY (unchecked)

//on sort button, listen for click
//send an ordered list to the load games function...

//then get in that load games function and sort

//...or these don't have to be checkboxes- could just be links..
