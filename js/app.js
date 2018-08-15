'use strict';

const newLocationForm = document.getElementById('newLocationForm');

//Utility Functions

//Start with random number generator;
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//function for adding random cookies to array to the object
const randomCookiesGenerator = ({
  randomCookies,
  minCust,
  maxCust,
  avgCookies
}) => {
  for (let i = 0; i < businessHour.length; i++) {
    randomCookies.push(
      Math.floor(getRndInteger(minCust, maxCust) * avgCookies)
    );
  }
};
//function for summing random cookies as a whole
const totalCookiesCalc = locationObj => {
  let sumOfTwo = 0;
  for (let i = 0; i < locationObj.randomCookies.length; i++) {
    sumOfTwo = sumOfTwo + locationObj.randomCookies[i];
  }
  return sumOfTwo;
};

//function to take in form data and output on the table

const handleLocation = (event) => {
  event.preventDefault();

  if (!event.target.location.value || !event.target.minF.value || !event.target.maxF.value || !event.target.avgF.value) {
    return alert('Fields cannot be empty');
  }
  locationList.push(locationGenerator(event.target.location.value,
    parseInt(event.target.minF.value),
    parseInt(event.target.maxF.value),
    parseFloat(event.target.avgF.value), []));
  let i = locationList.length - 1;
  randomCookiesGenerator(locationList[i]);
  locationList[i].totalCookies = totalCookiesCalc(locationList[i]);
  webRender(locationList[i]);
  event.target.location.value = null;
  event.target.minF.value = null;
  event.target.maxF.value = null;
  event.target.avgF.value = null;
  const element = document.getElementById('replacable');
  element.parentNode.removeChild(element);
  footRender();
};

//function  to render the table header
const headRender = () => {
  const locationTable = document.getElementById('locationTable');
  const trEl = document.createElement('tr');
  const thEl = document.createElement('th');
  const thEl3 = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < businessHour.length; i++) {
    const thEl2 = document.createElement('th');
    thEl2.textContent = businessHour[i];
    trEl.appendChild(thEl2);
  }
  thEl3.textContent = 'Total Cookies';
  trEl.appendChild(thEl3);
  locationTable.appendChild(trEl);

};
//function to render the table content
const webRender = locationObj => {
  const locationTable = document.getElementById('locationTable');
  const trEl = document.createElement('tr');
  const tdEl = document.createElement('td');
  const tdEl3 = document.createElement('td');
  tdEl.textContent = locationObj.name;
  trEl.appendChild(tdEl);
  for (let i = 0; i < locationObj.randomCookies.length; i++) {
    const tdEl2 = document.createElement('td');
    tdEl2.textContent = locationObj.randomCookies[i];
    trEl.appendChild(tdEl2);
  }
  tdEl3.textContent = locationObj.totalCookies;
  trEl.appendChild(tdEl3);
  locationTable.appendChild(trEl);
};

//function to render the table footer
const footRender = () => {
  const locationTable = document.getElementById('locationTable');
  const trEl = document.createElement('tr');
  trEl.setAttribute('id', 'replacable');
  const tdEl = document.createElement('td');
  tdEl.textContent = 'Total Per Hour';
  trEl.appendChild(tdEl);
  for (let h = 0; h < businessHour.length; h++) {
    let tdEl2 = document.createElement('td');
    let sumOfTwo = 0;
    for (let i = 0; i < locationList.length; i++) {
      sumOfTwo = sumOfTwo + locationList[i].randomCookies[h];
    }
    tdEl2.textContent = sumOfTwo;
    trEl.appendChild(tdEl2);
  }
  const tdEl3 = document.createElement('td');

  let sumOfTwo = 0;
  for (let i = 0; i < locationList.length; i++) {
    sumOfTwo = locationList[i].totalCookies + sumOfTwo;
  }
  tdEl3.textContent = sumOfTwo;
  trEl.appendChild(tdEl3);
  locationTable.appendChild(trEl);
};

//hours into arrays
const businessHour = [
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

//function for object creation
const locationGenerator = (
  name,
  minCust,
  maxCust,
  avgCookies,
  randomCookies
) => ({
  name,
  minCust,
  maxCust,
  avgCookies,
  randomCookies
});


const locationList = [
  locationGenerator('1st and Pike', 23, 65, 6.3, []),
  locationGenerator('SeaTac Airport', 3, 24, 1.2, []),
  locationGenerator('Seattle Center', 11, 38, 3.7, []),
  locationGenerator('Capitol Hill', 20, 38, 2.3, []),
  locationGenerator('Alki', 2, 16, 4.6, []),
];

//creating object and pushing to all-Location array


headRender();
for (let i = 0; i < locationList.length; i++) {
  randomCookiesGenerator(locationList[i]);
  locationList[i].totalCookies = totalCookiesCalc(locationList[i]);
  webRender(locationList[i]);
}
footRender();
newLocationForm.addEventListener('submit', handleLocation, false);