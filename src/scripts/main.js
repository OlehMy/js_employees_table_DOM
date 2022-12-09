/* eslint-disable no-shadow */
'use strict';

const initialEmployees = [
  {
    id: 1,
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    salary: '$162,700',
  },
  {
    id: 2,
    name: 'Michael Bruce',
    position: 'Javascript Developer',
    office: 'Singapore',
    age: 29,
    salary: '$183,000',
  },
  {
    id: 3,
    name: 'Michael Silva',
    position: 'Marketing Designer',
    office: 'London',
    age: 66,
    salary: '$198,500',
  },
  {
    id: 4,
    name: 'Prescott Bartlett',
    position: 'Technical Author',
    office: 'London',
    age: 27,
    salary: '$145,000',
  },
  {
    id: 5,
    name: 'Thor Walton',
    position: 'Developer',
    office: 'New York',
    age: 61,
    salary: '$98,540',
  },
  {
    id: 6,
    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    age: 55,
    salary: '$327,900',
  },
  {
    id: 7,
    name: 'Serge Baldwin',
    position: 'Data Coordinator',
    office: 'Singapore',
    age: 64,
    salary: '$138,575',
  },
  {
    id: 8,
    name: 'Shad Decker',
    position: 'Regional Director',
    office: 'Edinburgh',
    age: 51,
    salary: '$183,000',
  },
  {
    id: 9,
    name: 'Shou Itou',
    position: 'Regional Marketing',
    office: 'Tokyo',
    age: 20,
    salary: '$163,000',
  },
  {
    id: 10,
    name: 'Vivian Harrell',
    position: 'Financial Controller',
    office: 'San Francisco',
    age: 62,
    salary: '$452,500',
  },
  {
    id: 11,
    name: 'Zorita Serrano',
    position: 'Software Engineer',
    office: 'San Francisco',
    age: 56,
    salary: '$115,000',
  },
  {
    id: 12,
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: 39,
    salary: '$205,500',
  },
];

const tbody = document.querySelector('tbody');

function initEmployees(employees) {
  tbody.innerHTML = `
    ${employees.map(({ id, name, position, office, age, sallary }) => `
      <tr id="${id}">
        <td>${name}</td>
        <td>${position}</td>
        <td>${office}</td>
        <td>${age}</td>
        <td>${sallary}</td>
      </tr>
    `).join('')}
  `;
}

initEmployees(initialEmployees);

tbody.addEventListener('click', (event) => {
  event.target
    .closest('tr')
    .classList.toggle('active');
});
