// Initial Raiting
const raitings = {
  item1: 4.7,
  item2: 4.2,
  item3: 4.5,
  item4: 4.7,
  item5: 4.3,
  item6: 4.4,
  item7: 4.7,
  item8: 5,
  item9: 4.9
};

// Total stars
const starsTotal = 5;

// Run raitings when DOM load
document.addEventListener("DOMContentLoaded", getRaitings);

// Get raitings
function getRaitings() {
  for (let raiting in raitings) {
    // Get percentage
    const starPercentage = (raitings[raiting] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(
      `.${raiting} .stars-inner`
    ).style.width = starPercentageRounded;
  }
}
