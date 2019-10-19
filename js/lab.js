'use strict';

var content = document.getElementById('Total');
var rowf; 
var table = document.createElement('table');
content.appendChild(table);
function add(name, container, text) {
  var element = document.createElement(name);
  container.appendChild(element);
  if (text) {
    element.textContent = text;}
  return element;}

function Store(location,min,max,avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgcookie = avg;
  this.cookArray = [];
  this.totalSale = 0;
  this.generateHourlySales();}

Store.prototype.avgaregeCus = function() {
  var rang = this.max - this.min;
  var rand = Math.random() * rang + this.min;
  return Math.ceil(rand);
};

var hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
Store.prototype.generateHourlySales = function() {
  for (var i = 0; i < hours.length ; i++) {  
    var cookperHour = Math.ceil(this.avgaregeCus() * this.avgcookie);
    this.cookArray.push( cookperHour );    
    this.totalSale += cookperHour;}
};

Store.prototype.renderRow = function(table){
  var shopRow = add('tr',table);
  add('td',shopRow, this.location);
  for (var i = 0; i < this.cookArray.length; i++) {
    var currentHourlySales = this.cookArray[i];
    add('td', shopRow, currentHourlySales);}
  add('td', shopRow, this.totalSale);
};

function header() {
  var hourRow = add('tr',table);
  add('th',hourRow,'Location\\hours');
  for(var i = 0; i < hours.length; i++) {
    add('th', hourRow, hours[i]);
  }
  add('th', hourRow, 'Daily Totals');
}

function createRowf() {
  console.log('footerRow');
  var tr = document.createElement('tr');
  rowf = tr;
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = 'Totals';
  var megaTotal = 0;

  for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
    td = document.createElement('td');
    tr.appendChild(td);
    var hourlysales = 0; 
    for (var shopIndex = 0; shopIndex < shops.length; shopIndex++) {
      var shop = shops[shopIndex];
      hourlysales += shop.cookArray[hourIndex];
    }

    td.textContent = hourlysales;

    megaTotal += hourlysales;
  }

  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = megaTotal;
}

var shops = [];
shops.push(new Store('Seattle', 23, 65, 6.3));
shops.push(new Store('Tokyo', 3, 24, 1.2));
shops.push(new Store('Tubai', 11, 38, 3.7));
shops.push(new Store('Paris', 20, 38, 2.3));
shops.push(new Store('Lima', 2, 16, 4.6));

header();

for(var i = 0; i < shops.length; i++) {
  var currentShop = shops[i];
  currentShop.renderRow(table);
}
createRowf();

function submitHandler(event) {
  event.preventDefault();
  var locationName = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSales = parseFloat(event.target.avgSales.value);

  var newShop = new Store(locationName, min, max, avgSales);
  shops.push(newShop);
  table.removeChild(rowf);
  newShop.renderRow(table);
  createRowf();
}
var form = document.getElementById('addShopForm');
form.addEventListener('submit', submitHandler);