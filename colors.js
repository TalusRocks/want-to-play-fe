let interest = document.querySelectorAll('.interest .spec-number')
interest.forEach(e => {
  let thisInterest = parseInt(e.textContent)

  if (thisInterest === 1 || thisInterest === 2) {
    e.parentElement.classList.add('interest-blue')
  } else if (thisInterest === 3 || thisInterest === 4) {
    e.parentElement.classList.add('interest-green')
  } else if (thisInterest === 5 || thisInterest === 6) {
    e.parentElement.classList.add('interest-yellow')
  } else if (thisInterest === 7 || thisInterest === 8) {
    e.parentElement.classList.add('interest-orange')
  } else if (thisInterest === 9) {
    e.parentElement.classList.add('interest-red')
  } else if (thisInterest === 10) {
    e.parentElement.classList.add('interest-purple')
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
