const BeerView = function (container, beer) {
    this.container = container;
    this.beer = beer;
};

BeerView.prototype.render = function () {
    const beerContainer = document.createElement('div');
  beerContainer.className = 'beer-container';
  this.container.appendChild(beerContainer);

  const beerName = document.createElement('h2');
  beerName.textContent = this.beer.name;
  beerContainer.appendChild(beerName);

  const beerDetailList = document.createElement('ul');
  const beerTagline = document.createElement('li');
  const beerFirstBrewed = document.createElement('li');
  const beerDescription = document.createElement('li');
  beerTagline.textContent = this.beer.tagline;
  beerFirstBrewed.textContent = this.beer.first_brewed;
  beerDescription.textContent = this.beer.description;
  beerDetailList.appendChild(beerTagline);
  beerDetailList.appendChild(beerFirstBrewed);
  beerDetailList.appendChild(beerDescription);
  beerContainer.appendChild(beerDetailList);
}

module.exports = BeerView;
