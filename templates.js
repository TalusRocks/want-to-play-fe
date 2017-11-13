function gameItem(interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, name, notes) {
  return `<section class="game-item">
            <div class="game-specs">
              <div class="interest">
                <p class="spec-number">${interest}</p>
                <p class="spec-label">INTEREST</p>
              </div>
              <div class="player-range">
                <p class="spec-number"><span class="min-player">${minPlayer}</span> - <span class="max-player">${maxPlayer}</span></p>
                <p class="spec-label">PLAYERS</p>
              </div>
              <div class="time-range">
                <p class="spec-number"><span class="min-time">${minTime}</span> - <span class="max-time">${maxTime}</span></p>
                <p class="spec-label">MINUTES</p>
              </div>
              <div class="rating">
                <p class="spec-number">${ratingBGG}</p>
                <p class="spec-label">RATING</p>
              </div>
              <div class="weight">
                <p class="spec-number">${weightBGG}</p>
                <p class="spec-label">WEIGHT</p>
              </div>
            </div>
            <div class="game-title-notes-tags">
              <h2 class="title">${name}</h2>
              <p class="notes">${notes}</p>
              <div class="game-tags">
                <p class="tag"><a href="#">quick-to-teach</a></p>
              </div>
            </div>
          </section>`
}
