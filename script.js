const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie__list');
let moviePrice = +movieSelect.value;


// Update total and count
const updateSelectedCount = () => {
  // create a list with all the selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // get the length of the selected seats list
  const selectedSeatsCount = selectedSeats.length;

  // update the DOM count
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * moviePrice;
};


// Seat click event listener
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    // put the class of 'selected' on selected seats
    e.target.classList.toggle('selected');

    // update the count and total
    updateSelectedCount();
  };
});

// Movie select event listener
movieSelect.addEventListener('change', (e) => {
  // set moviePrice for each movie selected
  moviePrice = +e.target.value;

  // update the count and total
  updateSelectedCount();
});