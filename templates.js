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

function addGameView() {
  return `        <section class="form-wrap mb-5">
    <div class="close-view">
      <i class="material-icons close-x">close</i>
    </div>
    <h2 class="mt-05 text-center">Add a Game</h2>
    <form>

      <div class="form-row mt-2">
        <label for="game-name" id="game-name">Game name</label>
        <input type="text" name="game-name" class="mt-05">
      </div>

      <div class="form-row mt-2">
        <p>Level of interest</p><br>
        <div class="radio-row">
          <div>
            <input type="radio" name="interest" id="interest-1" value="1">
            <label for="interest-1"><span>1</span></label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-2" value="2">
            <label for="interest-2">2</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-3" value="3">
            <label for="interest-3">3</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-4" value="4">
            <label for="interest-4">4</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-5" value="5">
            <label for="interest-5">5</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-6" value="6">
            <label for="interest-6">6</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-7" value="7">
            <label for="interest-7">7</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-8" value="8">
            <label for="interest-8">8</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-9" value="9">
            <label for="interest-9">9</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-10" value="10">
            <label for="interest-10">10</label>
          </div>
        </div>
      </div>

      <div class="form-row two-input-row">
        <div class="half-form-row">
          <label for="player-min" id="player-min">Player min</label>
          <input type="text" name="player-min" class="mt-05">
        </div>
        <div class="half-form-row">
          <label for="player-max" id="player-max">Player max</label>
          <input type="text" name="player-max" class="mt-05">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="time-min" id="time-min">Time min</label>
          <input type="text" name="time-min" class="mt-05">
        </div>
        <div class="half-form-row">
          <label for="time-max" id="time-max">Time max</label>
          <input type="text" name="time-max" class="mt-05">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="rating" id="rating">Rating</label>
          <input type="text" name="rating" class="mt-05">
        </div>
        <div class="half-form-row">
          <label for="weight" id="weight">Weight</label>
          <input type="text" name="weight" class="mt-05">
        </div>
      </div>

      <div class="form-row mt-2">
        <label for="notes" id="notes">Notes</label>
        <textarea name="notes" rows="4" class="mt-05"></textarea>
      </div>

      <div class="form-row mt-2">
        <label for="tags" id="tags">Tags</label>
        <input type="text" name="tags" class="mt-05">
      </div>

      <div class="form-row cancel-save mt-2">
        <button id="cancel">Cancel</button>
        <button type="submit" id="submit">Save</button>
      </div>

    </form>
  </section>`
}
