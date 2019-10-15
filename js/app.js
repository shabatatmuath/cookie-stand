var seattle = {
    Minimum: 23,
    Maximum: 65,
    avgsale: 6.3,
    hourlysales: [],
    randomly: function () {
        var avarege = this.Maximum - this.Minimum;
        var random = Math.floor(Math.random() * avarege) + this.Minimum;
        return random;
    },
    cookieshourlyFunction: function () {
        for (j = 0; j < 15; j++) {
            this.amountOfCookiesCeil = Math.ceil(this.avgsale * this.randomly());
            this.hourlysales.push(this.amountOfCookiesCeil);
        }
        return this.hourlysales;
    },}

seattle.cookieshourlyFunction();
var Tokyo = {
    Minimum: 3,
    Maximum: 24,
    avgsale: 1.2,
    hourlysales: [],
    randomly: function () {
        var avarege = this.Maximum - this.Minimum;
        var random = Math.floor(Math.random() * avarege) + this.Minimum;
        return random;
    },
    cookieshourlyFunction: function () {
        for (j = 0; j < 15; j++) {
            this.amountOfCookiesCeil = Math.ceil(this.avgsale * this.randomly());
            this.hourlysales.push(this.amountOfCookiesCeil);
        }
        return this.hourlysales;
    },}

Tokyo.cookieshourlyFunction();
var Dubai = {
    Minimum: 11,
    Maximum: 38,
    avgsale: 3.7,
    hourlysales: [],
    randomly: function () {
        var avarege = this.Maximum - this.Minimum;
        var random = Math.floor(Math.random() * avarege) + this.Minimum;
        return random;
    },
    cookieshourlyFunction: function () {
        for (j = 0; j < 15; j++) {
            this.amountOfCookiesCeil = Math.ceil(this.avgsale * this.randomly());
            this.hourlysales.push(this.amountOfCookiesCeil);
        }
        return this.hourlysales;
    },}

Dubai.cookieshourlyFunction();
var Paris = {
    Minimum: 20,
    Maximum: 38,
    avgsale: 2.3,
    hourlysales: [],
    randomly: function () {
        var avarege = this.Maximum - this.Minimum;
        var random = Math.floor(Math.random() * avarege) + this.Minimum;
        return random;
    },
    cookieshourlyFunction: function () {
        for (j = 0; j < 15; j++) {
            this.amountOfCookiesCeil = Math.ceil(this.avgsale * this.randomly());
            this.hourlysales.push(this.amountOfCookiesCeil);
        }
        return this.hourlysales;
    },}

Paris.cookieshourlyFunction();
var Lima = {
    Minimum: 2,
    Maximum: 16,
    avgsale: 4.6,
    hourlysales: [],
    Random: function () {
        var avarege = this.Maximum - this.Minimum;
        var random = Math.floor(Math.random() * avarege) + this.Minimum;
        return random;
    },
    cookieshourlyFunction: function () {
        for (j = 0; j < 15; j++) {
            this.amountOfCookiesCeil = Math.ceil(this.avgsale * this.Random());
            this.hourlysales.push(this.amountOfCookiesCeil);
        }
        return this.hourlysales;
    },}
    
var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Lima.cookieshourlyFunction();
alla = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
allb = [seattle, Tokyo, Dubai, Paris, Lima];
for (let j = 0; j < alla.length; j++) {
    var count = 0;
    document.write("<h2>", alla[j], "</h2>");
    document.write("<ul>");
    for (i = 0; i < 15; i++) {
        count += allb[j].hourlysales[i];
        document.write("<li>");
        document.write(hour[i], ": ", allb[j].hourlysales[i], " Cookies.");
        document.write("<br>");
        document.write("</li>");
    }
    document.write("<li>", "Total : ", count, " Cookies.");
    document.write("</ul>");
}