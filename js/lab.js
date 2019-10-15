'use strict';
var hours = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesShop = [];
var Tables = document.getElementById('Table');

function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgArray = [];
    this.cookiesEachHourArray = [];
    this.totalCookies = 0;
    cookiesShop.push(this);
}


function Header() {
    var tableRow = document.createElement('tr');
    for (var i = 0; i <= hours.length; i++) {
        var element = document.createElement('th');
        element.textContent = hours[i - 1];
        tableRow.appendChild(element);
    }
    element = document.createElement('th');
    element.textContent = '          Total';
    tableRow.appendChild(element);

    Tables.appendChild(tableRow);
};
Store.prototype.CustHourly = function () {
    for (var v = 0; v <= hours.length; v++) {
        var singleh = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.avgArray.push(singleh);
    }
};
Store.prototype.cookiesPerCustomer = function () {
    this.CustHourly();
    for (var x = 0; x < hours.length; x++) {
        var hourCookies = Math.ceil(this.avgArray[x] * this.avg);
        this.cookiesEachHourArray.push(hourCookies);
        this.totalCookies += hourCookies;
    }
};
Store.prototype.render = function () {
    this.cookiesPerCustomer();
    var trName = document.createElement('tr');
    var tdStore = document.createElement('td');
    tdStore.textContent = this.name;
    trName.appendChild(tdStore);
    for (var y = 0; y < this.cookiesEachHourArray.length; y++) {
        var tdCell = document.createElement('td');
        tdCell.textContent = this.cookiesEachHourArray[y];
        trName.appendChild(tdCell);
    };
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalCookies;
    trName.appendChild(tdTotal);
    Tables.appendChild(trName);
};
var Seattle = new Store('Seattle',23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima',  2, 16, 4.6);
function renderAllStores() {
    for (var i = 0; i < cookiesShop.length; i++) {
        cookiesShop[i].render();
    }
};
function newRow() {
    var numleRow = document.createElement('tr');
    numleRow.textContent = 'Totals';
    Tables.appendChild(numleRow);
    var hTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < cookiesShop.length; j++) {
            hourlyTotal = hourlyTotal + cookiesShop[j].cookiesEachHourArray[i];
            hTotal += cookiesShop[j].cookiesEachHourArray[i];
            console.log(hTotal);
        }
        var tdElement = document.createElement('td');
        tdElement.textContent = hourlyTotal;
        numleRow.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = hTotal;
    numleRow.appendChild(tdElement);
};
Header();
renderAllStores();
newRow();


