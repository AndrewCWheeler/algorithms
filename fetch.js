getTeams = (year, page) => {
  fetch(
    'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>.json'
  )
    .then(response => response.json())
    .then(data => console.log(data));
};

console.log(getTeams(2012, 6));
