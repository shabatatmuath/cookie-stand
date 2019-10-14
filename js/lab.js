'use strict';
var hours = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var slocation = [];
var Tables = document.getElementById('salmonTable');
function Header() {
    var tableRow = document.createElement('tr');
    for (var i = 0; i <= hours.length; i++) {
        var thElement = document.createElement('th');
        thElement.textContent = hours[i - 1];
        tableRow.appendChild(thElement);
    }
    thElement = document.createElement('th');
    thElement.textContent = '          Total';
    tableRow.appendChild(thElement);

    Tables.appendChild(tableRow);
};
function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgCustArray = [];
    this.cookiesEachHourArray = [];
    this.totalCookies = 0;
    slocation.push(this);
}
Store.prototype.numCustHourly = function () {
    for (var v = 0; v <= hours.length; v++) {
        var singleHourCust = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.avgCustArray.push(singleHourCust);
    }
};
Store.prototype.cookiesPerCustomer = function () {
    this.numCustHourly();
    for (var x = 0; x < hours.length; x++) {
        var singleHourCookies = Math.ceil(this.avgCustArray[x] * this.avg);
        this.cookiesEachHourArray.push(singleHourCookies);
        this.totalCookies += singleHourCookies;
    }
};
Store.prototype.render = function () {
    this.cookiesPerCustomer();
    var trRowName = document.createElement('tr');
    var tdStore = document.createElement('td');
    tdStore.textContent = this.name;
    trRowName.appendChild(tdStore);
    for (var y = 0; y < this.cookiesEachHourArray.length; y++) {
        var tdCell = document.createElement('td');
        tdCell.textContent = this.cookiesEachHourArray[y];
        trRowName.appendChild(tdCell);
    };
    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.totalCookies;
    trRowName.appendChild(tdTotal);
    Tables.appendChild(trRowName);
};
var Seattle = new Store('Seattle', 2, 16, 4.6);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 23, 65, 6.3);
function renderAllStores() {
    for (var i = 0; i < slocation.length; i++) {
        slocation[i].render();
    }
};
function newRow() {
    var nleRow = document.createElement('tr');
    nleRow.textContent = 'Totals';
    Tables.appendChild(nleRow);
    var hTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < slocation.length; j++) {
            hourlyTotal = hourlyTotal + slocation[j].cookiesEachHourArray[i];
            hTotal += slocation[j].cookiesEachHourArray[i];
            console.log(hTotal);
        }
        var tdElement = document.createElement('td');
        tdElement.textContent = hourlyTotal;
        nleRow.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = hTotal;
    nleRow.appendChild(tdElement);
};
Header();
renderAllStores();
newRow();


