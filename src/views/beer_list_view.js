const BeerView = require('./beer_view.js');
const PubSub = require('../helpers/pub_sub.js');

const BeerListView = function (container) {
  this.container = container;
  this.beers = null;
}

BeerListView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beer-data-loaded', (event) => {
        this.beers = event.detail;
        this.render(this.beers);
    });
}

BeerListView.prototype.render = function (beers) {
  console.log("hello");
  beers.forEach((beer) => {
      const beerView = new BeerView(this.container, beer);
      beerView.render();
  });
}

module.exports = BeerListView;
