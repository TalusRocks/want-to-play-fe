function filterGamesView() {
  return `<section>
    <div class="close-view">
      <i class="material-icons close-x cancel">close</i>
    </div>
    <h2 class="mt-05 text-center">Filter Games</h2>
    <form>

      <div class="form-row mt-2">
        <p>Level of interest minimum</p><br>
        <div class="radio-row">
          <div>
            <input type="radio" name="min-interest-input" id="interest-1" value="1">
            <label for="interest-1"><span>1</span></label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-2" value="2">
            <label for="interest-2">2</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-3" value="3">
            <label for="interest-3">3</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-4" value="4">
            <label for="interest-4">4</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-5" value="5">
            <label for="interest-5">5</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-6" value="6">
            <label for="interest-6">6</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-7" value="7">
            <label for="interest-7">7</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-8" value="8">
            <label for="interest-8">8</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-9" value="9">
            <label for="interest-9">9</label>
          </div>
          <div>
            <input type="radio" name="min-interest-input" id="interest-10" value="10">
            <label for="interest-10">10</label>
          </div>
        </div>
      </div>

      <div class="form-row mt-2">
        <label for="players" id="players">How many players?</label>
        <input type="text" id="player-num-input" name="players" class="mt-05">
      </div>

      <div class="form-row mt-2">
        <label for="time-max" id="time">Max time (minutes)</label>
        <input type="text" id="time-max-input" name="time-max" class="mt-05">
      </div>

      <div class="form-row mt-2">
        <label for="rating" id="rating">Min rating (1-10)</label>
        <input type="text" id="rating-min-input" name="rating" class="mt-05">
      </div>

      <div class="form-row two-input-row mt-2">
        <div class="half-form-row">
          <label for="weight-min" id="weight-min">Weight min (1-5) </label>
          <input type="text" id="weight-min-input" name="weight-min" class="mt-05" placeholder="1">
        </div>
        <div class="or"><p>or</p></div>
        <div class="half-form-row">
          <label for="weight-max" id="weight-max">Weight max (1-5) </label>
          <input type="text" id="weight-max-input" name="weight-max" class="mt-05" placeholder="5">
        </div>
      </div>

      <div class="form-row cancel-save mt-2">
        <button id="cancel" class="cancel">Cancel</button>
        <button type="submit" id="submit">Filter</button>
      </div>

    </form>
  </section>`
}

function filteringBy(filterArr) {
  return `        <div class="filtering-by">
            <p><b>Filtering by: </b><i> ${filterArr}</i></p>
            <i class="material-icons clear-filterby">close</i>
          </div>`
}
