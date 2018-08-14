'use strict';

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
  for (let i = 0; i < businessHour.length; i++) {
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
  locationObj.totalCookies = sumOfTwo;
};
//

//function for object creation
const locationGenerator = (name, minCust, maxCust, avgCookies, randomCookies) => ({
  name,
  minCust,
  maxCust,
  avgCookies,
  randomCookies,
});

//function  to render the table header
const headRender = () => {
  let locationTable = document.getElementById('locationTable');
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  let thEl3 = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < businessHour.length; i++) {
    let thEl2 = document.createElement('th');
    thEl2.textContent = businessHour[i];
    trEl.appendChild(thEl2);
  }
  thEl3.textContent = 'Total Cookies';
  trEl.appendChild(thEl3);
  locationTable.appendChild(trEl);
};
//function to render the table content
const webRender = locationObj => {
  let locationTable = document.getElementById('locationTable');
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  let tdEl3 = document.createElement('td');
  tdEl.textContent = locationObj.name;
  trEl.appendChild(tdEl);
  for (let i = 0; i < locationObj.randomCookies.length; i++) {
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = locationObj.randomCookies[i];
    trEl.appendChild(tdEl2);
  }
  tdEl3.textContent = locationObj.totalCookies;
  trEl.appendChild(tdEl3);
  locationTable.appendChild(trEl);
};

//function to render the table footer
const footRender = () => {
  let locationTable = document.getElementById('locationTable');
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Total Per Hour';
  trEl.appendChild(tdEl);
  for (let h = 0; h < businessHour.length; h++) {
    let tdEl2 = document.createElement('td');
    let sumOfTwo = locationList[0].randomCookies[h];
    for (let i = 1; i < locationList.length; i++) {
      sumOfTwo = sumOfNumber(sumOfTwo, locationList[i].randomCookies[h]);
    }
    tdEl2.textContent = sumOfTwo;
    trEl.appendChild(tdEl2);
  }
  let tdEl3 = document.createElement('td');
  let sumOfTwo = locationList[0].totalCookies;
  for (let i = 1; i < locationList.length; i++) {
    sumOfTwo = locationList[i].totalCookies + sumOfTwo;
  }
  tdEl3.textContent = sumOfTwo;
  trEl.appendChild(tdEl3);
  locationTable.appendChild(trEl);
};

let locationList = [];
//hours into arrays
let businessHour = [
  '6 am',
  '7 am',
  '8 am',
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
  '6 pm',
  '7 pm',
  '8 pm'
];


//creating object and pushing to all-Location array
let pike = locationGenerator('1st and Pike', 23, 65, 6.3, []);
locationList.push(pike);
let seaTac = locationGenerator('SeaTac Airport', 3, 24, 1.2, []);
locationList.push(seaTac);
let seaCenter = locationGenerator('Seattle Center', 11, 38, 3.7, []);
locationList.push(seaCenter);
let capHill = locationGenerator('Capitol Hill', 20, 38, 2.3, []);
locationList.push(capHill);
let alki = locationGenerator('Alki', 2, 16, 4.6, []);
locationList.push(alki);

headRender();
for (let i = 0; i < locationList.length; i++) {
  randomCookiesGenerator(locationList[i]);
  totalCookiesCalc(locationList[i]);
  webRender(locationList[i]);
}
footRender();