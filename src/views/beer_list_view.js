const Request = require('../helpers/request_helper.js');
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


module.exports = BeerListView;
