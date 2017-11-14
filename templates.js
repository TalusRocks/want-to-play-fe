function gameItem(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId) {
  return `<section class="game-item" data-id="${gameId}">
          <a id="${name}"></a>
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
              <h2 class="title"><a href="#">${name}</a></h2>
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
  return `        <section class="form-wrap mb-5 data-id="${gameId}"">
    <div class="close-view">
      <i class="material-icons close-x cancel">close</i>
    </div>
    <h2 class="mt-05 text-center">Add a Game</h2>
    <form>

      <div class="form-row mt-2">
        <label for="game-name" id="game-name">Game name</label>
        <input type="text" id="game-name-input" name="game-name" class="mt-05">
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
          <input type="text" id="player-min-input" name="player-min" class="mt-05" placeholder="2">
        </div>
        <div class="half-form-row">
          <label for="player-max" id="player-max">Player max</label>
          <input type="text" id="player-max-input" name="player-max" class="mt-05" placeholder="4">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="time-min" id="time-min">Time min (minutes)</label>
          <input type="text" id="time-min-input" name="time-min" class="mt-05" placeholder="30">
        </div>
        <div class="half-form-row">
          <label for="time-max" id="time-max">Time max (minutes)</label>
          <input type="text" id="time-max-input" name="time-max" class="mt-05" placeholder="90">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="rating" id="rating">Rating (1-10)</label>
          <input type="text" id="rating-input" name="rating" class="mt-05" placeholder="7.0">
        </div>
        <div class="half-form-row">
          <label for="weight" id="weight">Weight (1-5)</label>
          <input type="text" id="weight-input" name="weight" class="mt-05" placeholder="3.00">
        </div>
      </div>

      <div class="form-row mt-2">
        <label for="notes" id="notes">Notes</label>
        <textarea name="notes" id="notes-input" rows="4" class="mt-05"></textarea>
      </div>

      <div class="form-row mt-2">
        <label for="tags" id="tags">Tags (comma, separated)</label>
        <input type="text" name="tags" id="tags-input" class="mt-05">
      </div>

      <div class="form-row cancel-save mt-2">
        <button id="cancel" class="cancel">Cancel</button>
        <button type="submit" id="submit">Save</button>
      </div>

    </form>
  </section>`
}

function editGameView(name, interest, minPlayer, maxPlayer, minTime, maxTime, ratingBGG, weightBGG, notes, tags, gameId) {
  return `<section class="form-wrap mb-5" data-id="${gameId}">
    <div class="close-view">
      <i class="material-icons close-x cancel">close</i>
    </div>
    <h2 class="mt-05 text-center">Edit Game</h2>
    <form>

      <div class="form-row mt-2">
        <label for="game-name" id="game-name">Game name</label>
        <input type="text" id="game-name-input" name="game-name" class="mt-05" value="${name}">
      </div>

      <div class="form-row mt-2">
        <p>Level of interest</p><br>
        <div class="radio-row">
          <div>
            <input type="radio" name="interest" id="interest-1" value="1" ${interest == '1' ? 'checked' : ''}>
            <label for="interest-1"><span>1</span></label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-2" value="2" ${interest == '2' ? 'checked' : ''}>
            <label for="interest-2">2</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-3" value="3" ${interest == '3' ? 'checked' : ''}>
            <label for="interest-3">3</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-4" value="4" ${interest == '4' ? 'checked' : ''}>
            <label for="interest-4">4</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-5" value="5" ${interest == '5' ? 'checked' : ''}>
            <label for="interest-5">5</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-6" value="6" ${interest == '6' ? 'checked' : ''}>
            <label for="interest-6">6</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-7" value="7" ${interest == '7' ? 'checked' : ''}>
            <label for="interest-7">7</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-8" value="8" ${interest == '8' ? 'checked' : ''}>
            <label for="interest-8">8</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-9" value="9" ${interest == '9' ? 'checked' : ''}>
            <label for="interest-9">9</label>
          </div>
          <div>
            <input type="radio" name="interest" id="interest-10" value="10" ${interest == '10' ? 'checked' : ''}>
            <label for="interest-10">10</label>
          </div>
        </div>
      </div>

      <div class="form-row two-input-row">
        <div class="half-form-row">
          <label for="player-min" id="player-min">Player min</label>
          <input type="text" id="player-min-input" name="player-min" class="mt-05" value="${minPlayer}">
        </div>
        <div class="half-form-row">
          <label for="player-max" id="player-max">Player max</label>
          <input type="text" id="player-max-input" name="player-max" class="mt-05" value="${maxPlayer}">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="time-min" id="time-min">Time min (minutes)</label>
          <input type="text" id="time-min-input" name="time-min" class="mt-05" value="${minTime}">
        </div>
        <div class="half-form-row">
          <label for="time-max" id="time-max">Time max (minutes)</label>
          <input type="text" id="time-max-input" name="time-max" class="mt-05" value="${maxTime}">
        </div>
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="rating" id="rating">Rating (1-10)</label>
          <input type="text" id="rating-input" name="rating" class="mt-05" value=${ratingBGG}>
        </div>
        <div class="half-form-row">
          <label for="weight" id="weight">Weight (1-5)</label>
          <input type="text" id="weight-input" name="weight" class="mt-05" value="${weightBGG}">
        </div>
      </div>

      <div class="form-row mt-2">
        <label for="notes" id="notes">Notes</label>
        <textarea name="notes" id="notes-input" rows="4" class="mt-05" value="${notes}"></textarea>
      </div>

      <div class="form-row mt-2">
        <label for="tags" id="tags">Tags (comma, separated)</label>
        <input type="text" name="tags" id="tags-input" class="mt-05" value="${tags}">
      </div>

      <div class="form-row cancel-save mt-2">
        <button id="cancel" class="cancel">Cancel</button>
        <button type="submit" id="submit">Save</button>
      </div>

      <div>
        <p class="text-center mt-5 mb-2"><a id="delete" href="#">Delete</a></p>
      </div>

    </form>
  </section>`
}
