function gameItem(interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, name, notes, gameId, tags) {
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
              <div class="game-tags" data-id="${gameId}">
              ${populateTags(tags)}
              </div>
            </div>
          </section>`
}

function populateTags (tagArr) {
  let result = ''
  tagArr.forEach(tag => result += createTag(tag.id, tag.name))
  return result
}
function createTag(tagId, tagName) {
  return `<p class="tag" data-id="${tagId}"><a href="#">${tagName}</a></p>`
}
