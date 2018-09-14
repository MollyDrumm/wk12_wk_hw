const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const beers = new Beers();
  beers.getData();
})
