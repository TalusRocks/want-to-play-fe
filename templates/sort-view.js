function sortGamesView() {
  return `        <section class="form-wrap mb-5">
            <div class="close-view">
              <i class="material-icons close-x cancel">close</i>
            </div>
            <h2 class="mt-05 text-center">Sort Games</h2>

              <div class="mt-2">
                <h3>Sort games by...</h3>
                <div class="all-sortby">
                  <p class="mt-2" id="placeholder">Select items below in the order you wish to sort</p>
                </div>
              </div>

              <div class="mt-2">
                <h3>Then by...</h3>
                <div class="all-thenby">
                  <p class="sortby mtb-1" id="interest-desc">Interest Descending</p>
                  <div class="sort-pair mtb-1">
                    <p class="sortby" id="players-asc">Players Ascending</p>
                    <p class="sortby" id="players-desc">Players Descending</p>
                  </div>
                  <div class="sort-pair mtb-1">
                    <p class="sortby" id="time-asc">Time Ascending</p>
                    <p class="sortby" id="time-desc">Time Descending</p>
                  </div>
                  <p class="sortby mtb-1" id="rating-desc">Rating Descending</p>
                </div>
              </div>

              <div class="form-row cancel-save mt-2">
                <button id="cancel" class="cancel">Cancel</button>
                <button id="sort">Sort</button>
              </div>
          </section>`
}

function sortingBy(selectedSortArr) {
  return `        <div class="sorting-by">
            <p><b>Sorting by: </b><i> ${selectedSortArr}</i></p>
            <i class="material-icons clear-sortby">close</i>
          </div>`
}
