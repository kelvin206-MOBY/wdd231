const params = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');

const fields = [
  ['firstName', 'First Name:'],
  ['lastName', 'Last Name:'],
  ['email', 'Email:'],
  ['phone', 'Mobile Number:'],
  ['organization', 'Business Name:'],
  ['timestamp', 'Submitted On']
];

fields.forEach(([key, label]) => {
  let value = params.get(key) || '';
  if (key === 'timestamp' && value) {
    value = new Date(value).toLocaleString();
  }
  const dt = document.createElement('dt');
  dt.textContent = label;
  const dd = document.createElement('dd');
  dd.textContent = value;   // textContent avoids injecting HTML
  results.append(dt, dd);
});