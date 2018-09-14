const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beers = null;
}

Beers.prototype.getData = function () {
    const request = new Request('https://api.punkapi.com/v2/beers');
    request.get()
      .then((data) => {
        this.beers = data;
        console.log(this.beers);
        PubSub.publish('Beers:beer-data-loaded', this.beers);
      })
      .catch((error) => {
          console.log(error);
      })
}

module.exports = Beers;
