// VARIABLES
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieList = document.querySelector('#movie__list');
let moviePrice = +movieList.value;


// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

// Update total and count
const updateSelectedCount = () => {
  // create a list with all the selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');


  // 1. Copy selected seats into an array
  // 2. Map  through the array
  // 3. Return a new array of indexes
  const seatsIndex = [...selectedSeats].map( (seat) => [...seats].indexOf(seat) ); 

  // save selected steats to local storage
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
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
movieList.addEventListener('change', (e) => {
  // set moviePrice for each movie selected
  moviePrice = +e.target.value;

  // save selected movie index and price in local storage
  setMovieData(e.target.selectedIndex, e.target.value);

  // update the count and total
  updateSelectedCount();
});