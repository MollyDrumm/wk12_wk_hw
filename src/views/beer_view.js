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
  const img = document.createElement('img');


  beerTagline.textContent = `Tagline: ${this.beer.tagline}`;
  beerFirstBrewed.textContent = `First Brewed: ${this.beer.first_brewed}`;
  beerDescription.textContent = `Description: ${this.beer.description}`;
  img.src = this.beer.image_url;

  beerDetailList.appendChild(beerTagline);
  beerDetailList.appendChild(beerFirstBrewed);
  beerDetailList.appendChild(beerDescription);
  beerDetailList.appendChild(img);
  beerContainer.appendChild(beerDetailList);

}


module.exports = BeerView;
