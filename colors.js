  function colorRanges(){
  let interest = document.querySelectorAll('.interest .spec-number')
  interest.forEach(e => {
    let thisInterest = parseInt(e.textContent)
    let interestDivClass = e.parentElement.classList

    if (thisInterest === 1 || thisInterest === 2) {
      interestDivClass.add('orange-1')
    } else if (thisInterest === 3 || thisInterest === 4) {
      interestDivClass.add('orange-2')
    } else if (thisInterest === 5 || thisInterest === 6) {
      interestDivClass.add('orange-3')
    } else if (thisInterest === 7 || thisInterest === 8) {
      interestDivClass.add('orange-4')
    } else if (thisInterest === 9) {
      interestDivClass.add('orange-5')
    } else if (thisInterest === 10) {
      interestDivClass.add('orange-6')
    }
  })

  let playerRange = document.querySelectorAll('.max-player')
  playerRange.forEach(e => {
    let thisPlayerMax = parseInt(e.textContent)
    let playersDivClass = e.parentElement.parentElement.classList

    if (thisPlayerMax === 1 || thisPlayerMax === 2) {
      playersDivClass.add('yellow-1')
    } else if (thisPlayerMax === 3 || thisPlayerMax === 4) {
      playersDivClass.add('yellow-2')
    } else if (thisPlayerMax === 5 || thisPlayerMax === 6) {
      playersDivClass.add('yellow-3')
    } else if (thisPlayerMax === 7 || thisPlayerMax === 8) {
      playersDivClass.add('yellow-4')
    } else if (thisPlayerMax >= 9) {
      playersDivClass.add('yellow-5')
    }
  })

  let minuteRange = document.querySelectorAll('.max-time')
  minuteRange.forEach(e => {
    let thisMinuteMax = parseInt(e.textContent)
    let minutesDivClass = e.parentElement.parentElement.classList

    if (thisMinuteMax >= 0 && thisMinuteMax <= 30) {
      minutesDivClass.add('blue-1')
    } else if (thisMinuteMax >= 31 && thisMinuteMax <= 60) {
      minutesDivClass.add('blue-2')
    } else if (thisMinuteMax >= 61 && thisMinuteMax <= 120) {
      minutesDivClass.add('blue-3')
    } else if (thisMinuteMax >= 121  && thisMinuteMax <= 200) {
      minutesDivClass.add('blue-4')
    } else if (thisMinuteMax >= 221) {
      minutesDivClass.add('blue-5')
    }
  })

  let rating = document.querySelectorAll('.rating')
  rating.forEach(e => {
    let thisRating = parseInt(e.textContent)
    let ratingDivClass = e.classList
console.log(thisRating);
    if (thisRating >= 0 && thisRating < 2) {
      ratingDivClass.add('green-1')
    } else if (thisRating >= 2 && thisRating < 4) {
      ratingDivClass.add('green-2')
    } else if (thisRating >= 4 && thisRating < 6) {
      ratingDivClass.add('green-3')
    } else if (thisRating >= 6 && thisRating < 8) {
      ratingDivClass.add('green-4')
    } else if (thisRating >= 8 && thisRating <= 10) {
      ratingDivClass.add('green-5')
    }
  })

  let weight = document.querySelectorAll('.weight')
  weight.forEach(e => {
    let thisWeight = parseInt(e.textContent)
    let weightDivClass = e.classList

    if (thisWeight >= 0 && thisWeight < 1) {
      weightDivClass.add('purple-1')
    } else if (thisWeight >= 1 && thisWeight < 2) {
      weightDivClass.add('purple-2')
    } else if (thisWeight >= 2 && thisWeight < 3) {
      weightDivClass.add('purple-3')
    } else if (thisWeight >= 3 && thisWeight < 4) {
      weightDivClass.add('purple-4')
    } else if (thisWeight >= 4 && thisWeight <= 5) {
      weightDivClass.add('purple-5')
    }
  })
}
