"use strict";

//Small function

//Start with random number generator;
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
//function for Sum
const sumOfNumber = (a, b) => {
  let sum = a + b;
  return sum;
};
//function for adding random cookies to array to the object
const randomCookiesGenerator = locationObj => {
  for (let i = 0; i < 15; i++) {
    locationObj.randomCookies.push(
      Math.floor(
        getRndInteger(locationObj.minCust, locationObj.maxCust) *
        locationObj.avgCookies
      )
    );
  }
};
//function for summing random cookies as a whole
const totalCookiesCalc = locationObj => {
  let sumOfTwo = locationObj.randomCookies[0];
  for (let i = 1; i < locationObj.randomCookies.length; i++) {
    sumOfTwo = sumOfNumber(sumOfTwo, locationObj.randomCookies[i]);
  }
  return sumOfTwo;
  console.log(sumOfTwo);
};
//function for web rendering
const webRender = locationObj => {
  let salesH2El = document.getElementById(locationObj.h2id);
  let salesUlEl = document.getElementById(locationObj.ulid);
  salesH2El.textContent = locationObj.name;
  for (let i = 0; i < locationObj.randomCookies.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = businessHour[i] + ': ' + locationObj.randomCookies[i] + ' cookies';
    salesUlEl.appendChild(liEl);
  }
  let liElTotal = document.createElement('li');
  liElTotal.textContent = 'Total Sales: ' + locationObj.totalCookies;
  salesUlEl.appendChild(liElTotal);
}
//hours into arrays
let businessHour = [' 6am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

const pikeStreet = {
  name: '1st and Pike',
  h2id: '1stPike',
  ulid: 'firstPike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomCookies: []
};
randomCookiesGenerator(pikeStreet);
pikeStreet.totalCookies = totalCookiesCalc(pikeStreet);
webRender(pikeStreet);

const seaTac = {
  name: 'SeaTac Airport',
  h2id: 'seaTac',
  ulid: 'airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomCookies: []
}
randomCookiesGenerator(seaTac);
seaTac.totalCookies = totalCookiesCalc(seaTac);
webRender(seaTac);

const seaCenter = {
  name: 'Seattle Center',
  h2id: 'seattleCenter',
  ulid: 'center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomCookies: []
}
randomCookiesGenerator(seaCenter);
seaCenter.totalCookies = totalCookiesCalc(seaCenter);
webRender(seaCenter);

const capHill = {
  name: 'Capitol Hill',
  h2id: 'capHill',
  ulid: 'hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  randomCookies: []
}
randomCookiesGenerator(capHill);
capHill.totalCookies = totalCookiesCalc(capHill);
webRender(capHill);

const alki = {
  name: 'Alki',
  h2id: 'alki',
  ulid: 'alkiBeach',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  randomCookies: []
}
randomCookiesGenerator(alki);
alki.totalCookies = totalCookiesCalc(alki);
webRender(alki);